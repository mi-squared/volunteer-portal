import React from 'react';
import {Router, Route, Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button.js';
import Alert from 'react-bootstrap/lib/Alert.js';
import Revalidator from 'revalidator/lib/revalidator.js'
import Q from 'q/q.js';

import * as actionCreators from '../action_creators';
import {saveApplicationRemote} from '../client.js';
import Header from '../components/header.jsx'

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
                    alertVisible: true,
                    submitTS: new Date().getTime()
                };
                if ( errors.errorFields) {
                    partialState.errorFields = errors.errorFields;
                }
                if ( errors.focusElement ) {
                    partialState.focusElement = errors.focusElement
                }
                if ( errors.errorMessage ) {
                    partialState.errorMessage = errors.errorMessage;
                }
                $.growl.error({
                    size: 'large',
                    location: 'bc',
                    message: errors.errorMessage || "There are fields in error. Please correct them to continue."
                });
                console.log("state: ", self.state);
                console.log("partial state: ", partialState);
                self.setState(partialState)
                console.log("state: ", self.state);
            }, 1);
        },

        doValidate: function (schemaSource, data) {
            var fieldsInError = {};
            data = data || this.props.data;

            var schema = $.extend(true, {}, schemaSource);

            var keys = Object.keys(schema.properties);
            for ( var idx in keys ) {
                var key = keys[idx];
                var property = schema.properties[key];
                var required = property['required'];
                var pattern = property['pattern'];
                var format = property['format'];
                var allowEmpty = property['allowEmpty'];
                if ( typeof required === 'function' ) {
                    var requiredValue = required();
                    property['required'] = requiredValue;
                }
                if ( typeof allowEmpty === 'function' ) {
                    var allowEmptyValue = allowEmpty();
                    property['allowEmpty'] = allowEmptyValue;
                }
                if ( typeof pattern === 'function' ) {
                    var patternValue = pattern();
                    property['pattern'] = patternValue;
                }
                if ( typeof format === 'function' ) {
                    var formatValue = format();
                    property['format'] = formatValue;
                }
            }

            var res = Revalidator.validate(data, schema);
            var fieldPrefix = schema.noPrefix ? '' : schema.fieldPrefix || 'data.';
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
            this.props.history.pushState(null, route);
        },

        saveApplication: function() {
            var stateJSON = this.props;
            var token = sessionStorage.getItem('token');
            var application = stateJSON.data;
            var deferred = Q.defer();

            var self = this;
            saveApplicationRemote(token, application).then(
                function(response) {
                    console.log("save success", response);
                    setTimeout( function() {
                        if ( !response.children ) {
                            response.children = [];
                        }
                        if ( !response.uploads ) {
                            response.uploads = [];
                        }
                        sessionStorage.setItem('applicationID', response.id);
                        self.props.setState( response );
                        deferred.resolve();
                    }, 1);
                },

                function(error) {
                    console.log("save error", error);
                    deferred.reject(error);
                }
            );

            return deferred.promise;
        },

        render: function() {
            return (
                <div>
                    {this.props.jwt && this.props.jwt && <Header {...this.props}/>}
                     <Component
                        {...this.props}
                        state={this.state}
                        doValidate={this.doValidate}
                        onBlur={this.onBlur}
                        handleAlertShow={this.handleAlertShow}
                        transitionTo={this.transitionToRoute}
                        errorFields={this.state.errorFields}
                        submitTS={this.state.submitTS}
                        focusElement={this.state.focusElement}
                        saveApplication={this.saveApplication}
                    />;

                </div>
            );
        }
    })
}
