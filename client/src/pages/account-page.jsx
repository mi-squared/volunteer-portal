import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button.js';

import * as actionCreators from '../action_creators';
import composePage from './base-page.jsx';
import ValidatedInput from '../components/validated-input-field.jsx';
import AccountFields from '../sections/account-fields';
import {updateAccount}  from '../client.js';

class AccountPage extends React.Component {

    constructor(props) {
        super(props);

        this.schema =
        {
            noPrefix: true,
            properties: {
                q_password: {
                    type: 'string',
                    maxLength: 255,
                    required: true,
                    allowEmpty: false
                },
                q_password2: {
                    type: 'string',
                    maxLength: 255,
                    required: true,
                    allowEmpty: false
                }
            }
        };

        this.state = {
            focusElement: "q_password",
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
        } else if ( this.state.q_password !== this.state.q_password2 ) {
            this.props.handleAlertShow({
                focusElement: 'q_password',
                errorFields: {
                    'q_password' : {
                        'field' : 'q_password'
                    },
                    'q_password2' : {
                        'field' : 'q_password2'
                    }
                },
                errorMessage : 'Passwords must match.'
            });
        } else {
            var data = {
                'username' : this.props.session.f_username || this.props.data.q_email,
                'password' : this.state['q_password']
            };
            var self = this;
            updateAccount(this.props.jwt, data).then(
                (response) => {
                    self.props.login({
                        token: response.token
                    });

                    $.growl.notice({
                        size: 'large',
                        location: 'bc',
                        message: "Password updated"
                    });
                    this.props.history.pushState(null, '/main');
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
        this.props.history.pushState(null, '/main');
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
                    <h1>Change password</h1>
                    <AccountFields {...this.props}
                        data={this.state}
                        onBlur={this.onBlur}
                        submitTS={this.props.submitTS}
                        handleChange={this.handleChange.bind(this)}
                        focusElement={this.props.focusElement||this.state.focusElement}
                        errorFields={this.props.errorFields}
                    />
                </div>

                <div className="j-page-nav col-md-12">
                    <Button onClick={this.doDone} id="done" className="btn btn-primary">Done</Button>
                    <Button onClick={this.doCancel} id="cancel" className="btn">Cancel</Button>
                </div>

            </div>
        );
    }
}

export const AccountPageContainer = connect(
    (state) => state.toJSON(), actionCreators
)(composePage(AccountPage));
