import React from 'react';
import {connect} from 'react-redux';
import Router, {Route, DefaultRoute, Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button.js';

import * as actionCreators from '../action_creators';

export const EsignPage = React.createClass({
    mixins: [ Router.Navigation ],

    doContinue: function() {
        // todo - reinitialize state
        this.transitionTo('/done-application');
    },

    render: function() {
        return (
            <div className="container">
                <h1>ESign</h1>

                <div className="j-page-nav">
                    <Button onClick={this.doContinue}>Continue</Button>
                </div>

            </div>
        );
    }
});

function mapStateToProps(state) {
    return state.toJSON();
}

export const EsignPageContainer = connect(
    mapStateToProps, actionCreators
)(EsignPage);