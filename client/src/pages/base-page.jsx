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
            return {};
        },

        handleAlertDismiss: function () {
            this.setState({alertVisible: false});
        },

        handleAlertShow: function (errors) {
            var self = this;
            setTimeout( function() {
                errors = errors || {};
                var partialState = {
                    focusElement: errors.focusElement,
                    errorMessage: errors.errorMessage,
                    alertVisible: true,
                    submitTS: new Date().getTime()
                };
                if ( errors.errorFields) {
                    partialState.errorFields = errors.errorFields;
                }
                console.log("state: ", self.state);
                console.log("partial state: ", partialState);
                self.setState(partialState)
            }, 1);
        },

        doValidate: function (schema, data) {
            var fieldsInError = {};
            var res = Revalidator.validate(data || this.props.data, schema);
            var fieldPrefix = schema.fieldPrefix || '';
            if (!res.valid) {
                for (var i in res.errors) {
                    var error = res.errors[i];
                    fieldsInError[  fieldPrefix + error['property']] = {
                        field: fieldPrefix + error['property'],
                        message: error['message']
                    };
                }
            }

            var errorField = !fieldsInError ? null : fieldsInError[Object.keys(fieldsInError)[0]];
            var focusElement = errorField ? errorField['field'] : null;
            this.setState({
                focusElement: focusElement,
                errorFields: fieldsInError,
                submitTS: new Date().getTime()
            });
            console.log("fields in error: ", fieldsInError);
            console.log("focus element: ", focusElement);
            console.log("state", this.state);
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
                        <h4>{this.state.errorMessage}</h4>
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
                    errorFields={this.state.errorFields}
                    submitTS={this.state.submitTS}
                    focusElement={this.state.focusElement}
                />;
        }
    })
}

