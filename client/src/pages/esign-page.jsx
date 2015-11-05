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
        this.props.updateField( {
            key : "data.q_esigned".split("."),
            value : "true"
        });

        this.props.updateField( {
            key : "data.q_esigned_date".split("."),
            value : new Date().getTime()
        });

        var self = this;
        self.props.saveApplication();
        self.props.transitionTo('/done-application');
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-7">
                    <h1>ESign {this.props.data.q_esigned} {this.props.data.q_esigned_date}</h1>
                    <div>
                        I, <b>{this.props.data.q_first_name} {this.props.data.q_last_name}</b> agree to volunteer, and
                        authorize Your Best Pathway To Health to use the information I provided to help me get started.
                    </div>
                </div>

                <div className="j-page-nav col-md-7">
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