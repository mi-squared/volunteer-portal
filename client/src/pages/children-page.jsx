import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button.js';

import ChildFields from '../sections/child-fields.jsx';

import * as actionCreators from '../action_creators';
import composePage from './base-page.jsx';

class ChildrenPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            alertVisible: false,
            errorFields: {},
            errorMessage : '',
            disabled: false,
            value: "Continue"
        };

        this.doBack = this.doBack.bind(this);
        this.addChild = this.addChild.bind(this);
        this.getChildren = this.getChildren.bind(this);
        this.doContinue = this.doContinue.bind(this);
    }

    addChild() {
        this.props.addChild( {
            application_id : this.props.data.id,
            childID: new Date().getTime()
        } );
    }

    getChildren() {
        return this.props.data.children || [];
    }

    doContinue() {
        // disable button on click to prevent multiple clicks
        this.setState({
          disabled: true,
          value: "Please Wait"
        });
        var self = this;
        this.props.saveApplication().then( function() {
            // then move on to next page
            self.props.history.pushState(null, '/volunteering-detail');
        });
    }

    doBack() {
        this.props.history.pushState(null, '/main');
    }

    render() {
        var self = this;
        return (
            <div className="container well">
                <div className="col-md-12">
                    <h1>Children under 13</h1>

                    <h4>Please provide details for the children you are bringing to the event who are under 13 years of age.</h4>
                </div>

                {self.getChildren().map(entry =>
                    <ChildFields {...this.props}
                        childID={entry.childID}
                        onBlur={this.onBlur}
                        submitTS={this.props.submitTS}
                        focusElement={this.props.focusElement||this.state.focusElement}
                        errorFields={this.props.errorFields}
                    />
                )}

                <div className="j-page-nav col-md-12">
                    <Button onClick={this.doContinue} className="btn btn-primary" disabled={this.state.disabled}>{this.state.value}</Button>
                    <Button onClick={this.addChild }>Add child</Button>
                    <Button onClick={this.doBack}>Back</Button>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return state.toJSON();
}

export const ChildrenPageContainer = connect(
    mapStateToProps, actionCreators
)(composePage(ChildrenPage));
