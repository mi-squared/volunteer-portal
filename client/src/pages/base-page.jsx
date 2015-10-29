import React from 'react';
import Router, {Route, DefaultRoute, Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button.js';
import Alert from 'react-bootstrap/lib/Alert.js';
import Revalidator from 'revalidator/lib/revalidator.js'

import * as actionCreators from '../action_creators';

import {saveApplication}  from '../client.js';

export default function composePage(Component) {

    return React.createClass({

        mixins: [ Router.Navigation ],

        getInitialState: function() {
            return {
            };
        },

        handleAlertDismiss: function () {
            this.setState({alertVisible: false});
        },

        handleAlertShow: function () {
            var self = this;
            self.setState({
                alertVisible: true
            })
        },

        doValidate: function (schema) {
            var fieldsInError = {};
            var res = Revalidator.validate(this.props.data, schema);
            if (!res.valid) {
                for (var i in res.errors) {
                    var error = res.errors[i];
                    fieldsInError[error['property']] = {
                        field: error['property'],
                        message: error['message']
                    };
                }
            }

            var errorField = !fieldsInError ? null : fieldsInError[Object.keys(fieldsInError)[0]];
            this.setState({
                focusElement: errorField ? errorField['field'] : null,
                errorFields: fieldsInError,
                submitTS: new Date().getTime()
            });
            return Object.keys(fieldsInError) < 1;
        },

        onBlur: function () {
            this.setState({
                focusElement: ''
            });
            this.doValidate();
        },

        transitionToRoute: function(route) {
            this.transitionTo(route);
        },

        render: function() {
            var alert;
            if (this.state.alertVisible) {
                alert = (
                    <Alert bsStyle="danger" onDismiss={ () => this.handleAlertDismiss.call(this) }>
                        <h4>Form error</h4>
                        <p>Please update the fields in error to continue.</p>
                    </Alert>
                );
            } else {
                alert = <div/>;
            }

            return <Component
                    {...this.props}
                    alert={alert}
                    state={this.state}
                    doValidate={this.doValidate}
                    onBlur={this.onBlur}
                    handleAlertShow={this.handleAlertShow}
                    transitionTo={this.transitionToRoute}
                />;
        }
    })
}

