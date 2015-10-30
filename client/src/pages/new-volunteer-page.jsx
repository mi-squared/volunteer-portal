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
            errorMessage : 'Form error'
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
                q_email: {
                    type: 'string',
                    maxLength: 255,
                    format: 'email',
                    required: true,
                    allowEmpty: false
                },
                q_dob: {
                    type: 'string',
                    format: "date",
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

            register(data).then(
                function(response) {
                    self.props.login({
                        token: response.token
                    });
                    self.transitionTo('/do-register');
                },
                function(error) {
                    self.props.handleAlertShow({
                        errorMessage: "You may have already registered another account under that email.",
                        errorFields : [
                            {
                                field: 'data.q_email',
                                message: ''
                            }
                        ]
                    });
                }
            );
        } else {
            this.props.handleAlertShow();
        }
    }

    doCancel() {
        this.props.reset();
        this.props.transitionTo('/');
    }

    render() {
        return (
            <div className="container">
                <h1>Volunteer Profile</h1>

                {alert}

                <div>
                    <RegistrationFields
                        {...this.props}
                        onBlur={this.onBlur}
                        submitTS={this.props.submitTS}
                        focusElement={this.props.focusElement||this.state.focusElement}
                        errorFields={this.props.errorFields}
                    />
                </div>

                <hr/>

                <div className="j-page-nav">
                    <Button onClick={this.doRegister}>Create</Button>
                    <Button onClick={this.doCancel}>Cancel</Button>
                </div>

            </div>
        );
    }
}

export const NewVolunteerPageContainer = connect(
    (state) => state.toJSON(), actionCreators
)(composePage(NewVolunteerPage));