import React from 'react';
import {connect} from 'react-redux';
import Router, {Route, DefaultRoute, Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button.js';
import Alert from 'react-bootstrap/lib/Alert.js';
import Revalidator from 'revalidator/lib/revalidator.js'

import Demographics from '../sections/demographics-fields.jsx';

import * as actionCreators from '../action_creators';

import {saveApplication}  from '../client.js';

export const MainPage = React.createClass({
    mixins: [ Router.Navigation ],

    getInitialState: function() {
        return {
            focusElement: "q_first_name",
            alertVisible: false,
            errorFields: {},
            errorMessage : 'Form error'
        };
    },

    handleAlertDismiss: function() {
        this.setState({alertVisible: false});
    },

    handleAlertShow: function() {
        var self = this;
        self.setState({
            alertVisible: true
        });
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
                q_address_1: {
                    type: 'string',
                    maxLength: 255,
                    required: true,
                    allowEmpty: false
                },
                q_address_city: {
                    type: 'string',
                    maxLength: 255,
                    required: true,
                    allowEmpty: false
                },
                q_address_state: {
                    type: 'string',
                    maxLength: 255,
                    required: true,
                    allowEmpty: false
                },
                q_address_zip: {
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

        var errorField = !fieldsInError ? null : fieldsInError[Object.keys(fieldsInError)[0] ];
        this.setState({
            focusElement : errorField ? errorField['field'] : null,
            errorFields : fieldsInError,
            submitTS: new Date().getTime()
        });
        return Object.keys(fieldsInError) < 1;
    },

    doContinue : function() {
        if (this.doValidate() ) {
            // save the application if passes validation
            // then move on to next page
            this.props.saveApplication();
            var isBringingChildren = this.props['q_bringing_children'] === 'true';
            this.transitionTo(isBringingChildren ? '/children-page' : '/volunteering-detail');
        } else {
            this.handleAlertShow();
        }
    },

    onBlur: function() {
        this.setState( {
            focusElement : ''
        });
        this.doValidate();
    },

    render: function() {
        var alert;
        if (this.state.alertVisible) {
            alert = (
                <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
                    <h4>Form error</h4>
                    <p>Please update the fields in error to continue.</p>
                </Alert>
            );
        } else {
            alert = <div/>;
        }

        return <div className="container">
            <h1>Volunteer Application</h1>

            {alert}

            <Demographics
                submitTS={this.state.submitTS}
                data={this.props}
                onBlur={this.onBlur}
                focusElement={this.state.focusElement}
                errorFields={this.state.errorFields}/>

            <hr/>

            <div className="j-page-nav">
                <Button onClick={this.doContinue}>Continue</Button>
            </div>
        </div>;
    }
});

function mapStateToProps(state) {
    return state.toJSON();
}

export const MainPageContainer = connect(
    mapStateToProps, actionCreators
)(MainPage);