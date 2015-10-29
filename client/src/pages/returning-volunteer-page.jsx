import React from 'react';
import {connect} from 'react-redux';
import Router, {Route, DefaultRoute, Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button.js';
import Alert from 'react-bootstrap/lib/Alert.js'
import Revalidator from 'revalidator/lib/revalidator.js'

import * as actionCreators from '../action_creators';
import {login, getApplication}  from '../client.js';

import SignInFields from '../sections/signin-fields.jsx';

export const ReturningVolunteerPage = React.createClass({

    mixins: [ Router.Navigation ],

    getInitialState: function() {
        return {
            focusElement: "session.f_username",
            alertVisible: false,
            errorFields: {},
            errorMessage : 'Form error'
        };
    },

    componentWillMount: function() {
        // reset to initial state whenever this form appears
        this.props.reset();
    },

    handleAlertDismiss: function() {
        this.setState({alertVisible: false});
    },

    handleAlertShow: function() {
        this.setState({alertVisible: true});
    },

    doValidate: function() {
        // todo - should be a module
        var fieldsInError = {};
        var schema = {
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

        var res = Revalidator.validate(this.props.session, schema);
        if ( !res.valid ) {
            for ( var i in res.errors ) {
                var error = res.errors[i];
                fieldsInError[error['property']] = {
                    field: 'session.' + error['property'],
                    message: 'session.' + error['message']
                };
            }
        }

        this.setState({
            errorFields : fieldsInError,
            submitTS: new Date().getTime()
        });
        return Object.keys(fieldsInError) < 1;
    },

    doSignIn: function() {
        // validation
        debugger;
        if ( this.doValidate() ) {
            var self = this;
            debugger;
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
                                    self.transitionTo('/main');
                                },
                                function(error) {
                                    console.log(error);
                                }
                            );
                        } else {
                            console.log("New app.");
                            self.transitionTo('/main');
                        }
                    },
                    function(error) {
                        self.doInvalidCredentials();
                    }
            );
        } else {
            var self = this;
            setTimeout( function() {
                var errorField = !self.state.errorFields ? null : self.state.errorFields[Object.keys(self.state.errorFields)[0] ];
                self.setState({
                    focusElement : errorField ? errorField['field'] : null,
                    errorMessage: "Form error",
                    submitTS: new Date().getTime()
                });
                self.doAlerts();
            }, 1);
        }
    },

    doInvalidCredentials: function() {
        this.setState({
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
        this.doAlerts();
        this.setState( {
            submitTS: new Date().getTime()
        });
    },

    doCancel: function() {
        // todo - reinitialize state
        this.transitionTo('/');
    },

    doAlerts: function() {
        this.handleAlertShow();
    },

    onBlur: function() {
        this.setState( {
            focusElement : ''
        });
    },

    render: function() {
        var alert;
        if (this.state.alertVisible) {
            alert = (
                <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
                    <h4>{this.state.errorMessage}</h4>
                    <p>Please update the fields in error to continue.</p>
                </Alert>
            );
        } else {
            alert = <div/>;
        }

        return (
            <div className="container">
                <h1>Welcome back</h1>
                <h3>
                    Please sign in to continue.
                </h3>

                {alert}

                <div>
                    <SignInFields
                        {...this.props}
                        submitTS={this.state.submitTS}
                        onBlur={this.onBlur}
                        focusElement={this.state.focusElement}
                        errorFields={this.state.errorFields}
                    />
                </div>

                <hr/>

                <div className="j-page-nav">
                    <Button onClick={this.doSignIn}>Log in</Button>
                    <Button onClick={this.doCancel}>Cancel</Button>
                </div>

            </div>
        );
    }
});

function mapStateToProps(state) {
    return state.toJSON();
}

export const ReturningVolunteerPageContainer = connect(
    mapStateToProps, actionCreators
)(ReturningVolunteerPage);