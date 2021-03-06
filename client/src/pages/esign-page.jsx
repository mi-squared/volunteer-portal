import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button.js';

import * as actionCreators from '../action_creators';
import composePage from './base-page.jsx';

class EsignPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
            value: "Accept"
        };

        this.doBack = this.doBack.bind(this);
        this.doCancel = this.doCancel.bind(this);
        this.doContinue = this.doContinue.bind(this);
    }

    doBack() {
        this.props.history.pushState(null, '/volunteering-detail');
    }

    doCancel() {
        this.props.history.pushState(null, '/');
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

        // disable button on click to prevent multiple clicks
        this.setState({
          disabled: true,
          value: "Please Wait"
        });
        var self = this;
        setTimeout( function() {
            self.props.saveApplication().then( function() {
                // then move on to next page
                self.props.history.pushState(null, '/upload-forms');
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
                        By submitting this form, you're granting Your Best Pathway to Health permission to contact you by email.
                        </p>
                        <p>
                            <b>Pathway to Health</b>
                            <br/>
                            12501 Old Columbia Pike
                            <br/>
                            Silver Spring, MD 20904
                            <br/>
                            United States
                            <br/>
                            <a href='http://www.pathwaytohealthvolunteer.org'>http://www.pathwaytohealthvolunteer.org</a>
                        </p>

                        <p>
                            You can revoke permission at any time using the SafeUnsubscribe<sup>(TM)</sup> application found at the bottom of every email.
                        </p>

                        <p>
                            Please download and review the <a target="_blank" href="/client/dist/static/volunteer-agreement.pdf"><b>Volunteer Agreement</b></a>.
                            By electronically signing on this page, you are agreeing to the terms and conditions described therein.
                        </p>

                    </div>
                </div>

                <div className="j-page-nav col-md-12">
                    <Button onClick={this.doContinue} id="submit-esign" className="btn btn-primary" disabled={this.state.disabled}>{this.state.value}</Button>
                    <Button onClick={this.doBack} id="back-esign">Back</Button>
                    <Button onClick={this.doCancel} id="cancel-esign">Cancel</Button>
                </div>

            </div>
        );
    }
}

export const EsignPageContainer = connect(
    (state) => state.toJSON(), actionCreators
)(composePage(EsignPage));
