import React from 'react';
import {connect} from 'react-redux';
import Router, {Route, DefaultRoute, Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button.js';

import * as actionCreators from '../action_creators';
import composePage from './base-page.jsx';

class EsignPage extends React.Component {
    constructor(props) {
        super(props);
        this.doBack = this.doBack.bind(this);
        this.doCancel = this.doCancel.bind(this);
        this.doContinue = this.doContinue.bind(this);
    }

    doBack() {
        this.props.transitionTo('/volunteering-detail');
    }

    doCancel() {
        this.props.transitionTo('/');
    }

    doContinue() {
        this.props.transitionTo('/done-application');
    }

    render() {
        return (
            <div className="container">
                <h1>ESign</h1>

                <div className="j-page-nav">
                    <Button onClick={this.doBack}>Back</Button>
                    <Button onClick={this.doContinue}>Accept</Button>
                    <Button onClick={this.doCancel}>Cancel</Button>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return state.toJSON();
}

export const EsignPageContainer = connect(
    (state) => state.toJSON(), actionCreators
)(composePage(EsignPage));