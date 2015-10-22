import React from 'react';
import {connect} from 'react-redux';
import Router, {Route, DefaultRoute, Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button.js';

import RegistrationFields from '../sections/registration-fields.jsx';
import * as actionCreators from '../action_creators';

export const DoRegisterPage = React.createClass({
    mixins: [ Router.Navigation ],

    doContinue: function() {
        // todo - reinitialize state
        this.transitionTo('/main');
    },

    render: function() {
        return (
            <div className="container">
                <h1>Volunteer Application</h1>

                <div>
                    Thank you for registering. You will receive an email notification about your account information.
                    Please click 'Create' to proceed to the volunteer application form.
                </div>

                <div className="j-page-nav">
                    <Button onClick={this.doContinue}>Create</Button>
                </div>

            </div>
        );
    }
});

function mapStateToProps(state) {
    return state.toJSON();
}

export const DoRegisterPageContainer = connect(
    mapStateToProps, actionCreators
)(DoRegisterPage);