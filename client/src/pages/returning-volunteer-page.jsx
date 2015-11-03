import React from 'react';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/lib/Button.js';

import * as actionCreators from '../action_creators';
import {login, getApplication}  from '../client.js';
import composePage from './base-page.jsx';
import SignInFields from '../sections/signin-fields.jsx';

class ReturningVolunteerPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            focusElement: "session.f_username",
            alertVisible: false,
            errorFields: {},
            errorMessage : 'Form error'
        };

        this.schema =
        {
            fieldPrefix: 'session.',
            properties: {
                'f_username': {
                    type: 'string',
                    maxLength: 255,
                    required: true,
                    allowEmpty: false
                },
                'f_password': {
                    type: 'string',
                    maxLength: 255,
                    required: true,
                    allowEmpty: false
                }
            }
        };

        this.doSignIn = this.doSignIn.bind(this);
        this.doCancel = this.doCancel.bind(this);
        this.doInvalidCredentials = this.doInvalidCredentials.bind(this);
    }

    componentWillMount() {
        // reset to initial state whenever this form appears
        this.props.reset();
    }

    doSignIn() {
        // validation
        if ( this.props.doValidate( this.schema, this.props.session) ) {
            var self = this;
            login(this.props.session['f_username'], this.props.session['f_password'])
                .then(
                    function(response) {
                        var token = response.token;
                        self.props.login({
                            token: token
                        });
                        var applicationID = response['application_id'];
                        if ( applicationID ) {
                            console.log("Loading app " + applicationID);
                            getApplication(token, applicationID).then(
                                function(response) {
                                    response['application_id'] = response['id'];
                                    delete response['id'];
                                    self.props.loadApplication(response);
                                    self.props.transitionTo('/main');
                                },
                                function(error) {
                                    console.log(error);
                                }
                            );
                        } else {
                            console.log("New app.");
                            self.props.transitionTo('/main');
                        }
                    },
                    function(error) {
                        self.doInvalidCredentials();
                    }
            );
        } else {
            this.props.handleAlertShow();
        }
    }

    doInvalidCredentials() {
        this.props.handleAlertShow({
            focusElement: 'session.f_password',
            errorMessage: "Invalid username or password",
            errorFields : {
                'session.f_username': {
                    field: 'session.f_username',
                    message: ''
                },
                'session.f_password': {
                    field: 'session.f_password',
                    message: ''
                }
            }
        });
    }

    doCancel() {
        this.props.transitionTo('/');
    }

    render() {
        return (
            <div className="container">
                <h1>Welcome back</h1>
                <h3>
                    Please sign in to continue.
                </h3>

                {this.props.alert}

                <SignInFields
                    {...this.props}
                    onBlur={this.onBlur}
                    submitTS={this.props.submitTS}
                    focusElement={this.props.focusElement||this.state.focusElement}
                    errorFields={this.props.errorFields}
                />

                <hr/>

                <div className="j-page-nav">
                    <Button onClick={this.doSignIn}>Log in</Button>
                    <Button onClick={this.doCancel}>Cancel</Button>
                </div>

            </div>
        );
    }
}

export const ReturningVolunteerPageContainer = connect(
    (state) => state.toJSON(), actionCreators
)(composePage(ReturningVolunteerPage));