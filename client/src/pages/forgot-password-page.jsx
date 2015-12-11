import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button.js';

import * as actionCreators from '../action_creators';
import composePage from './base-page.jsx';
import ValidatedInput from '../components/validated-input-field.jsx';
import ForgotPasswordFields from '../sections/forgot-password-fields.jsx';
import {forgotPassword}  from '../client.js';

class ForgotPasswordPage extends React.Component {

    constructor(props) {
        super(props);

        this.schema =
        {
            noPrefix: true,
            properties: {
                q_email: {
                    type: 'string',
                    maxLength: 255,
                    required: true,
                    allowEmpty: false
                }
            }
        };

        this.state = {
            focusElement: "q_email",
            alertVisible: false,
            errorFields: {},
            errorMessage : '',
        };
        this.doDone = this.doDone.bind(this);
        this.doCancel = this.doCancel.bind(this);
    }

    doDone() {
        // validate
        if ( !this.props.doValidate( this.schema, this.state ) ) {
            this.props.handleAlertShow();
        } else {
            var data = {
                'email' : this.state['q_email']
            };
            var self = this;
            forgotPassword(data).then(
                (response) => {
                    $.growl.notice({
                        size: 'large',
                        location: 'bc',
                        message: "Temporary login sent. Please check your email."
                    });
                    this.props.history.pushState(null, '/');
                },
                (error) => {
                    self.props.handleAlertShow({
                        errorMessage: "An internal server error has occurred. Please contact your administrator.",
                    });
                }
            );

        }
    }

    doCancel() {
        this.props.history.pushState(null, '/');
    }

    handleChange(e, v) {
        var stateObj = {};
        stateObj[e] = v.target.value;
        this.setState(stateObj);
    }

    render() {
        return (
            <div className="container well">
                <div className="col-md-12">
                    <h1>Forgot password</h1>

                    <p>
                        You may enter your registration email here, and get emailed temporary credentials
                        for the purpose of resetting your password.
                    </p>

                    <ForgotPasswordFields {...this.props}
                        data={this.state}
                        onBlur={this.onBlur}
                        submitTS={this.props.submitTS}
                        handleChange={this.handleChange.bind(this)}
                        focusElement={this.props.focusElement||this.state.focusElement}
                        errorFields={this.props.errorFields}
                    />
                </div>

                <div className="j-page-nav col-md-12">
                    <Button onClick={this.doDone} id="done" className="btn btn-primary">Submit</Button>
                    <Button onClick={this.doCancel} id="cancel" className="btn">Cancel</Button>
                </div>

            </div>
        );
    }
}

export const ForgotPasswordPageContainer = connect(
    (state) => state.toJSON(), actionCreators
)(composePage(ForgotPasswordPage));
