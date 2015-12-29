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
            errorMessage : 'Form error',
            disabled: false,
            value: "Log In"
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
        this.doForgotPassword = this.doForgotPassword.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this)
    }

    componentWillMount() {
        // reset to initial state whenever this form appears
        this.props.reset();
        // and hydrate select lists with options
        this.props.fetchOptions();

    }

    handleKeyUp(e) {
      if (e.keyCode === 13) {
        this.doSignIn();
      }
    }

    doSignIn() {
        // validation
        if ( this.props.doValidate( this.schema, this.props.session) ) {
            // disable button on click to prevent multiple clicks
            this.setState({
              disabled: true,
              value: "Please Wait"
            });
            var self = this;
            login(this.props.session['f_username'], this.props.session['f_password'])
                .then(
                    function(response) {
                        var token = response.token;
                        var applicationID = response['application_id'];
                        sessionStorage.setItem('token', token);
                        sessionStorage.setItem('applicationID', applicationID);
                        self.props.login({
                            token: token
                        });
                        if ( applicationID ) {
                            console.log("Loading app " + applicationID);
                            getApplication(token, applicationID).then(
                                function(response) {
                                    self.props.loadApplication(response);
                                    self.props.history.pushState(null, '/main');
                                },
                                function(error) {
                                    console.log(error);
                                }
                            );
                        } else {
                            console.log("New app.");
                            self.props.history.pushState(null, '/main');

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
        this.setState({
          disabled: false,
          value: "Log In"
        });
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
        this.props.history.pushState(null, '/');
    }

    doForgotPassword() {
        this.props.history.pushState(null, '/forgot-password');
    }

    render() {
        return (
            <div className="container well" onKeyUp={this.handleKeyUp}>
                <div className="col-md-12">
                    <h1>Welcome back</h1>
                    <h3>
                        Please Log In to continue.
                    </h3>

                    {this.props.alert}
                </div>

                <SignInFields
                    {...this.props}
                    onBlur={this.onBlur}
                    submitTS={this.props.submitTS}
                    focusElement={this.props.focusElement||this.state.focusElement}
                    errorFields={this.props.errorFields}
                />


                <div className="j-page-nav col-md-12">
                    <button ref="login" onClick={this.doSignIn} id="submit-login" className="btn btn-primary" disabled={this.state.disabled}>{this.state.value}</button>
                    <Button onClick={this.doCancel} id="cancel-login">Cancel</Button>
                </div>

                <div className="col-md-12">
                    <a href="javascript:;" onClick={this.doForgotPassword} className="pull-right">Forgot password</a>
                </div>

            </div>
        );
    }
}

export const ReturningVolunteerPageContainer = connect(
    (state) => state.toJSON(), actionCreators
)(composePage(ReturningVolunteerPage));
