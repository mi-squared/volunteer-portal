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
            errorMessage : ''
        };

        this.doContinue = this.doContinue.bind(this);
        this.doBack = this.doBack.bind(this);
    }

    doContinue() {
        // save the application if passes validation
        var self = this;
        this.props.saveApplication().then( function() {
            // then move on to next page
            var isEsigned = self.props.data['q_esigned'] === 'true';
            if ( isEsigned ) {
                self.props.transitionTo('/done-application');
            } else {
                self.props.transitionTo('/esign');
            }
        });

    }

    doBack() {
        var isBringingChildren = this.props.data['q_bringing_children'] === 'true';
        this.props.transitionTo(isBringingChildren ? '/children-page' : '/main');
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-7">
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

                <hr/>

                <div className="j-page-nav col-md-7">
                    <Button onClick={this.doBack}>Back</Button>
                    <Button onClick={this.doContinue}>Continue</Button>
                </div>

            </div>
        );
    }
}

export const VolunteeringDetailPageContainer = connect(
    (state) => state.toJSON(), actionCreators
)(composePage(VolunteeringDetailPage));