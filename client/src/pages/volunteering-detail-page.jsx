import React from 'react';
import {connect} from 'react-redux';
import Router, {Route, DefaultRoute, Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button.js';

import VolunteerGeneral from '../sections/volunteer-general.jsx';
import Availability from '../sections/availability-fields.jsx';

import * as actionCreators from '../action_creators';

export const VolunteeringDetailPage = React.createClass({
    mixins: [ Router.Navigation ],

    doContinue : function() {
        // todo - where does this go?
        this.transitionTo('/esign');
    },

    doBack : function() {
        var isBringingChildren = this.props.data['q_bringing_children'] === 'true';
        this.transitionTo(isBringingChildren ? '/children-page' : '/main');
    },
    render: function() {

        return (
            <div className="container">
                <h1>Volunteering detail</h1>

                <VolunteerGeneral {...this.props}/>

                <Availability {...this.props}/>

                <hr/>

                <div className="j-page-nav">
                    <Button onClick={this.doBack}>Back</Button>
                    <Button onClick={this.doContinue}>Continue</Button>
                </div>


            </div>
        );
    }
});

function mapStateToProps(state) {
    return state.toJSON();
}

export const VolunteeringDetailPageContainer = connect(
    mapStateToProps, actionCreators
)(VolunteeringDetailPage);