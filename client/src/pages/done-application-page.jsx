import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button.js';

import * as actionCreators from '../action_creators';

export const DoneApplicationPage = React.createClass({
    mixins: [ Router.Navigation ],

    doContinue: function() {
        // todo - reinitialize state
        this.props.history.pushState(null, '/upload-forms');
    },

    render: function() {
        return (
            <div className="container well">
                <h1>Thank you</h1>
                <p className="lead">Press 'Continue' to upload and complete additional documents</p>
                <div className="j-page-nav">
                    <Button onClick={this.doContinue} className="btn btn-primary">Continue</Button>
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
