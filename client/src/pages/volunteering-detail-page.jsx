import React from 'react';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/lib/Button.js';

import VolunteerGeneral from '../sections/volunteer-general.jsx';
import Availability from '../sections/availability-fields.jsx';
import composePage from './base-page.jsx';
import * as actionCreators from '../action_creators';

class VolunteeringDetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
                q_licensed_discipline: {
                    type: 'string',
                    maxLength: 255,
                    required: () => this.props.data['q_volunteering_in_licensed_area'] == 'true',
                    allowEmpty: () => this.props.data['q_volunteering_in_licensed_area'] !== 'true'
                },
                q_licensed_state: {
                    type: 'string',
                    maxLength: 255,
                    required: () => this.props.data['q_volunteering_in_licensed_area'] == 'true',
                    allowEmpty: () => this.props.data['q_volunteering_in_licensed_area'] !== 'true'
                },
                q_license_expiration: {
                    type: 'string',
                    pattern: /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/,
                    required: () => this.props.data['q_volunteering_in_licensed_area'] == 'true',
                    allowEmpty: () => this.props.data['q_volunteering_in_licensed_area'] !== 'true'
                },
                q_licensed_number: {
                    type: 'string',
                    maxLength: 255,
                    required: () => this.props.data['q_volunteering_in_licensed_area'] == 'true',
                    allowEmpty: () => this.props.data['q_volunteering_in_licensed_area'] !== 'true'
                },
            }
        };

        this.doContinue = this.doContinue.bind(this);
        this.doBack = this.doBack.bind(this);
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
                var isEsigned = self.props.data['q_esigned'] === 'true';
                if ( isEsigned ) {
                    self.props.history.pushState(null, '/done-application');
                } else {
                    self.props.history.pushState(null, '/esign');
                }
            });
        } else {
            this.props.handleAlertShow();
        }
    }

    doBack() {
        var isBringingChildren = this.props.data['q_bringing_children'] === 'true';
        this.props.history.pushState(null, isBringingChildren ? '/children-page' : '/main');
    }

    render() {
        return (
            <div className="container well">
                <div className="col-md-12">
                    <h1>Volunteering detail</h1>

                    {this.props.alert}
                </div>

                <VolunteerGeneral {...this.props}
                    onBlur={this.onBlur}
                    submitTS={this.props.submitTS}
                    focusElement={this.props.focusElement||this.state.focusElement}
                    errorFields={this.props.errorFields}
                />

                <Availability {...this.props}
                    onBlur={this.onBlur}
                    submitTS={this.props.submitTS}
                    focusElement={this.props.focusElement||this.state.focusElement}
                    errorFields={this.props.errorFields}
                />

              <input id="application-id" type="hidden" value={this.props.data.id && this.props.data.id}/>

                <hr/>

                <div className="j-page-nav col-md-12">
                    <Button onClick={this.doContinue} id="submit-detail" className="btn btn-primary" disabled={this.state.disabled}>{this.state.value}</Button>
                    <Button onClick={this.doBack} id="back-detail">Back</Button>
                </div>

            </div>
        );
    }
}

export const VolunteeringDetailPageContainer = connect(
    (state) => state.toJSON(), actionCreators
)(composePage(VolunteeringDetailPage));
