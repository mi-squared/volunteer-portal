import React from 'react';
import {connect} from 'react-redux';
import Router, {Route, DefaultRoute, Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button.js';
import Alert from 'react-bootstrap/lib/Alert.js';

import Demographics from '../sections/demographics-fields.jsx';
import * as actionCreators from '../action_creators';
import {saveApplication}  from '../client.js';
import composePage from './base-page.jsx';

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.schema =
        {
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
        if (this.props.doValidate.call(this, this.schema) ) {
            // save the application if passes validation
            this.props.saveApplication();
            // then move on to next page
            this.props.transitionTo.call(this, this.props.data['q_bringing_children'] === 'true' ?
                '/children-page' : '/volunteering-detail');
        } else {
            this.props.handleAlertShow.call(this);
        }
    }

    render() {
        return <div className="container">
            <h1>Volunteer Application</h1>

            {this.props.alert}

            <Demographics
                {...this.props}
                submitTS={this.props.state.submitTS}
                onBlur={super.onBlur}
                focusElement={this.props.state.focusElement || 'data.q_first_name'}
                errorFields={this.props.state.errorFields}/>

            <hr/>

            <div className="j-page-nav">
                <Button onClick={this.doContinue}>Continue</Button>
            </div>
        </div>;
    }
}

function mapStateToProps(state) {
    return state.toJSON();
}

export const MainPageContainer = connect(
    mapStateToProps, actionCreators
)(composePage(MainPage));