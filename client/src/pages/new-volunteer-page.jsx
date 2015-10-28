import React from 'react';
import {connect} from 'react-redux';
import Router, {Route, DefaultRoute, Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button.js';
import Alert from 'react-bootstrap/lib/Alert.js'
import Revalidator from 'revalidator/lib/revalidator.js'
import {register}  from '../client.js';

import RegistrationFields from '../sections/registration-fields.jsx';
import {MainContainer} from './main-page.jsx';
import * as actionCreators from '../action_creators';

export const NewVolunteerPage = React.createClass({
    mixins: [ Router.Navigation ],

    getInitialState: function() {
        return {
            focusElement: "q_first_name",
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
                q_first_name: {
                    type: 'string',
                    maxLength: 255,
                    required: true,
                    allowEmpty: false
                },
                q_last_name: {
                    type: 'string',
                    maxLength: 255,
                    required: true,
                    allowEmpty: false
                },
                q_email: {
                    type: 'string',
                    maxLength: 255,
                    format: 'email',
                    required: true,
                    allowEmpty: false
                },
                q_dob: {
                    type: 'string',
                    format: "date",
                    required: true
                },
                q_password: {
                    type: 'string',
                    maxLength: 255,
                    required: true,
                    allowEmpty: false
                }
            }
        };
        var res = Revalidator.validate(this.props, schema);
        if ( !res.valid ) {
            for ( var i in res.errors ) {
                var error = res.errors[i];
                fieldsInError[error['property']] = {
                    field: error['property'],
                    message: error['message']
                };
            }
        }

        this.setState({
            errorFields : fieldsInError,
            submitTS: new Date().getTime()
        });
        return Object.keys(fieldsInError) < 1;
    },

    doRegister: function() {
        // validation
        if ( this.doValidate() ) {
            var self = this;
            var data = {
                'username' : this.props['q_email'],
                'last_name' : this.props['q_last_name'],
                'first_name' : this.props['q_first_name'],
                'middle_name' : this.props['q_middle_name'],
                'email': this.props['q_email'],
                'password' : this.props['q_password']
            };

            register(data).then(
                function(response) {
                    self.props.login({
                        token: response.token
                    });
                    self.transitionTo('/do-register');
                },
                function(error) {
                    self.setState({
                        errorMessage: "You may have already registered another account under that email.",
                        errorFields : [
                            {
                                field: '<q_email></q_email>',
                                message: ''
                            }
                        ]
                    });
                    self.doAlerts();
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

    onBlur: function() {
        this.setState( {
            focusElement : ''
        });
        this.doValidate();
    },

    doAlerts: function() {
        this.handleAlertShow();
    },

    doCancel: function() {
        this.props.reset();
        this.transitionTo('/');
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
                <h1>Volunteer Profile</h1>

                {alert}

                <div>
                    <RegistrationFields
                        submitTS={this.state.submitTS}
                        onBlur={this.onBlur}
                        data={this.props}
                        focusElement={this.state.focusElement}
                        errorFields={this.state.errorFields}/>
                </div>

                <hr/>

                <div className="j-page-nav">
                    <Button onClick={this.doRegister}>Create</Button>
                    <Button onClick={this.doCancel}>Cancel</Button>
                </div>

            </div>
        );
    }
});

function mapStateToProps(state) {
    return state.toJSON();
}

export const NewVolunteerPageContainer = connect(
    mapStateToProps, actionCreators
)(NewVolunteerPage);