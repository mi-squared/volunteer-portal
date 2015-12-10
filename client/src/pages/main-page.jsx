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
            errorMessage : '',
            disabled: false,
            value: "Continue"
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
                q_church_pastor_email: {
                    type: 'string',
                    maxLength: 255,
                    allowEmpty: true
                },
                q_dob: {
                    type: 'string',
                    pattern: /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/,
                    required: true,
                    allowEmpty: false
                },
                q_date_graduation: {
                    type: 'string',
                    pattern: /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/,
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
            // disable button on click to prevent multiple clicks
            this.setState({
              disabled: true,
              value: "Please Wait"
            });
            // save the application if passes validation
            var self = this;
            this.props.saveApplication().then( function() {
                // then move on to next page
                self.props.history.pushState(null, self.props.data['q_bringing_children'] === 'true' ?
                    '/children-page' : '/volunteering-detail');
            });
        } else {
            this.props.handleAlertShow();
            this.setState({
              disabled: false,
              value: "Continue"
            });
        }
    }

    render() {
        return (
            <div className="container well">
                <div className="col-md-12">
                    <h1>Volunteer Application</h1>

                    {this.props.alert}
                </div>

                <Demographics {...this.props}
                    onBlur={this.onBlur}
                    submitTS={this.props.submitTS}
                    focusElement={this.props.focusElement||this.state.focusElement}
                    errorFields={this.props.errorFields}
                />

                <div className="j-page-nav col-md-12">
                    <Button onClick={this.doContinue} id="submit-main" className="btn btn-primary" disabled={this.state.disabled}>{this.state.value}</Button>

                </div>
            </div>
        );
    }
}

export const MainPageContainer = connect(
    (state) => state.toJSON(), actionCreators
)(composePage(MainPage));
