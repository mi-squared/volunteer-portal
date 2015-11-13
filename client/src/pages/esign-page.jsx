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
        setTimeout( function() {
            self.props.saveApplication().then( function() {
                // then move on to next page
                self.props.transitionTo('/done-application');
            });
        }, 1 );
    }

    render() {
        return (
            <div className="container well">
                <div className="col-md-12">
                    <h1>Signature & Acceptance</h1>
                    <div>
                        <p>
                        By submitting this form, you're granting the following permission to email you:
                        </p>
                        <p>
                            <b>Pathway to health</b>
                            <br/>
                            1234 happy street
                            <br/>
                            Silver Spring, MD 55555
                            <br/>
                            United States
                            <br/>
                            <a href='http://www.pathwaytohealthvolunteer.org'>http://www.pathwaytohealthvolunteer.org</a>
                        </p>

                        <p>
                            You can revoke permission to mail to your email address at any time using the SafeUnsubscribe<sup>(TM)</sup> found at the bottom of every email.
                        </p>
                    </div>
                </div>

                <div className="j-page-nav col-md-12">
                    <Button onClick={this.doBack}>Back</Button>
                    <Button onClick={this.doContinue} className="btn btn-primary">Accept</Button>
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