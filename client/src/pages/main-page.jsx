import React from 'react';
import {connect} from 'react-redux';
import Router, {Route, DefaultRoute, Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button.js';
import Alert from 'react-bootstrap/lib/Alert.js';

import Demographics from '../sections/demographics-fields.jsx';

import * as actionCreators from '../action_creators';

import {saveApplication}  from '../client.js';

export const MainPage = React.createClass({
    mixins: [ Router.Navigation ],

    getInitialState: function() {
        return {errorFields: []};
    },

    handleAlertDismiss: function() {
        this.setState({alertVisible: false});
    },

    handleAlertShow: function() {
        this.setState({alertVisible: true});
    },

    doValidate: function() {
        // todo - should be a module
        var fieldsToCheck = ['q_first_name', 'q_last_name', 'q_dob', 'q_email',
            'q_address_1', 'q_address_city', 'q_address_state' ];
        var fieldsInError = [];
        for ( var i in fieldsToCheck ) {
            var field = fieldsToCheck[i];
            if ( !this.props[field] ) {
                fieldsInError.push({
                    field: field,
                    message: 'Required field'
                });
            }
        }
        this.setState({ errorFields : fieldsInError });
        return fieldsInError.length < 1;
    },

    doContinue : function() {
        if ( this.doValidate() ) {
            // save the application if passes validation
            // then move on to next page
            this.props.saveApplication();
            var isBringingChildren = this.props['q_bringing_children'] === 'true';
            this.transitionTo(isBringingChildren ? '/children-page' : '/volunteering-detail');
        } else {
            this.handleAlertShow();
        }
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

            <Demographics data={this.props}
                          requiredFields={['q_first_name', 'q_last_name', 'q_dob', 'q_email' ]}
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