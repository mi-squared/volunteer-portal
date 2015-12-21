import React from 'react';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/lib/Button.js';

import {register}  from '../client.js';
import RegistrationFields from '../sections/registration-fields.jsx';
import * as actionCreators from '../action_creators';
import composePage from './base-page.jsx';

class NewVolunteerPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            focusElement: "data.q_first_name",
            alertVisible: false,
            errorFields: {},
            errorMessage : 'Form error',
            disabled: false,
            value: "Create"
        };

        this.schema = {
            fieldPrefix: 'data.',
            properties: {
                q_first_name: {
                    type: 'string',
                    maxLength: 255,
                    required: true,
                    allowEmpty: false
                },
                q_last_name: {
                    type: 'string',
                    maxLength: 255,
                    required: true,
                    allowEmpty: false
                },
                q_address_1: {
                    type: 'string',
                    maxLength: 255,
                    required: true,
                    allowEmpty: false
                },
                q_address_city: {
                    type: 'string',
                    maxLength: 255,
                    required: true,
                    allowEmpty: false
                },
                q_address_state: {
                    type: 'string',
                    maxLength: 255,
                    required: true,
                    allowEmpty: false
                },
                q_address_zip: {
                    type: 'string',
                    maxLength: 255,
                    required: true,
                    allowEmpty: false
                },
                q_email: {
                    type: 'string',
                    maxLength: 255,
                    format: 'email',
                    required: true,
                    allowEmpty: false
                },
                q_dob: {
                    type: 'string',
                    pattern: /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/,
                    required: true
                },
                q_password: {
                    type: 'string',
                    maxLength: 255,
                    required: true,
                    allowEmpty: false
                }
            }
        };

        this.doRegister = this.doRegister.bind(this);
        this.doCancel = this.doCancel.bind(this);
    }


    componentWillMount() {
        // reset to initial state whenever this form appears
        this.props.reset();
        this.props.fetchOptions();
        // fetch list options

    }

    doRegister() {
        // validation
        var self = this;
        if ( this.props.doValidate(this.schema, this.props.data) ) {
            var data = {
                'username' : this.props.data['q_email'],
                'last_name' : this.props.data['q_last_name'],
                'first_name' : this.props.data['q_first_name'],
                'middle_name' : this.props.data['q_middle_name'],
                'email': this.props.data['q_email'],
                'password' : this.props.data['q_password']
            };
            // disable button on click to prevent multiple clicks
            this.setState({
              disabled: true,
              value: "Please Wait"
            });

            register(data).then(
                (response) => {
                    self.props.login({
                        token: response.token
                    })
                    sessionStorage.setItem('token', token);
                    self.props.history.pushState(null, '/do-register');

                },
                (error) => {
                    self.props.handleAlertShow({
                        errorMessage: "You may have already registered another account under that email.",
                        errorFields : [
                            {
                                field: 'data.q_email',
                                message: ''
                            }
                        ],
                        focusElement: 'q_first_name'
                    });
                    self.setState({
                        disabled: false,
                        value: "Continue"
                    });
                }
            );
        } else {
            this.props.handleAlertShow();
            this.setState({
              disabled: false,
              value: "Continue"
            });
        }
    }

    doCancel() {
        this.props.reset();

        this.props.history.goBack();
    }

    render() {
        return (
            <div className="container well">
                <div className="col-md-12">
                    <h1>Volunteer Profile</h1>

                    {this.props.alert}
                </div>

                <RegistrationFields
                    {...this.props}
                    onBlur={this.onBlur}
                    submitTS={this.props.submitTS}
                    focusElement={this.props.focusElement||this.state.focusElement}
                    errorFields={this.props.errorFields}
                />

                <div className="j-page-nav col-md-12">

                    <Button onClick={this.doRegister} id="submit" className="btn btn-primary" disabled={this.state.disabled}>{this.state.value}</Button>

                    <Button onClick={this.doCancel}>Cancel</Button>
                </div>
            </div>
        );
    }
}


export const NewVolunteerPageContainer = connect(
    (state) => state.toJSON(), actionCreators
)(composePage(NewVolunteerPage));
