import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button.js';

import * as actionCreators from '../action_creators';

export const DoneApplicationPage = React.createClass({
    mixins: [ Router.Navigation ],

    doLogOut: function() {
        // todo - reinitialize state
        sessionStorage.clear();
        this.props.history.pushState(null, '/');
    },

    goHome: function() {
        // todo - reinitialize state
        this.props.history.pushState(null, '/main');
    },

    render: function() {
        return (
            <div className="container well">
                <h1>Thank you</h1>
                <div className="j-page-nav">
                    <Button onClick={this.doLogOut} className="btn btn-primary">Finish and Logout</Button>
                    <Button onClick={this.goHome} className="btn btn-default">Go Back to Application</Button>
                </div>

            </div>
        );
    }
});

function mapStateToProps(state) {
    return state.toJSON();
}

export const DoneApplicationPageContainer = connect(
    mapStateToProps, actionCreators
)(DoneApplicationPage);
