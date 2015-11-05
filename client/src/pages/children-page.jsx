import React from 'react';
import {connect} from 'react-redux';
import Router, {Route, DefaultRoute, Link} from 'react-router';
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
            errorMessage : ''
        };

        this.doBack = this.doBack.bind(this);
        this.addChild = this.addChild.bind(this);
        this.getChildren = this.getChildren.bind(this);
        this.doContinue = this.doContinue.bind(this);
    }

    addChild() {
        var childrenCount = this.props.data.children.length;
        this.props.addChild( {
            childID: childrenCount,
            application_id : this.props.data.id
        } );
    }

    getChildren() {
        var children = this.props.data.children || {};
        var childrenArray = [];
        Object.keys(children).forEach(function (key) {
            var val = children[key];
            if ( val )  {
                childrenArray.push( val );
            }
        });
        return childrenArray;
    }

    doContinue() {
        var self = this;
        this.props.saveApplication().then( function() {
            // then move on to next page
            self.props.transitionTo('/volunteering-detail');
        });
    }

    doBack() {
        this.props.transitionTo('/main');
    }

    render() {
        var self = this;
        return (
            <div className="container">
                <div className="col-md-7">
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

                <div className="j-page-nav col-md-7">
                    <Button onClick={this.addChild }>Add another child</Button>
                    <Button onClick={this.doBack}>Back</Button>
                    <Button onClick={this.doContinue}>Continue</Button>
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