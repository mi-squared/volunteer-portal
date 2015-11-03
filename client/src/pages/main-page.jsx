import React from 'react';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/lib/Button.js';

import Demographics from '../sections/demographics-fields.jsx';
import * as actionCreators from '../action_creators';
import {saveApplication}  from '../client.js';
import composePage from './base-page.jsx';

class MainPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            focusElement: "data.q_first_name",
            alertVisible: false,
            errorFields: {},
            errorMessage : ''
        };

        this.schema =
        {
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
                }
            }
        };

        this.doContinue = this.doContinue.bind(this);
    }

    doContinue() {
        if ( this.props.doValidate( this.schema ) ) {
            // save the application if passes validation
            this.props.saveApplication();
            // then move on to next page
            this.props.transitionTo(this.props.data['q_bringing_children'] === 'true' ?
                '/children-page' : '/volunteering-detail');
        } else {
            this.props.handleAlertShow();
        }
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-7">
                    <h1>Volunteer Application</h1>

                    {this.props.alert}
                </div>

                <Demographics {...this.props}
                    onBlur={this.onBlur}
                    submitTS={this.props.submitTS}
                    focusElement={this.props.focusElement||this.state.focusElement}
                    errorFields={this.props.errorFields}
                    />

                <div className="j-page-nav col-md-7">
                    <Button onClick={this.doContinue}>Continue</Button>
                </div>
            </div>
        );
    }
}

export const MainPageContainer = connect(
    (state) => state.toJSON(), actionCreators
)(composePage(MainPage));