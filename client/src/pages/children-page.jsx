import React from 'react';
import {connect} from 'react-redux';
import Router, {Route, DefaultRoute, Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button.js';

import ChildFields from '../sections/child-fields.jsx';

import * as actionCreators from '../action_creators';

export const ChildrenPage = React.createClass({
    mixins: [ Router.Navigation ],

    addChild: function() {
        this.props.addChild( {
            childID: new Date().getTime()
        } );
    },

    getChildren: function() {
        var children = this.props.data.children;
        var childrenArray = [];
        Object.keys(children).forEach(function (key) {
            var val = children[key];
            if ( val )  {
                childrenArray.push( val );
            }
        });
        return childrenArray;
    },

    doContinue : function() {
        this.transitionTo('/volunteering-detail');
    },

    doBack : function() {
        this.transitionTo('/main');
    },

    render: function() {
        var self = this;
        return (
            <div className="container">
                <h1>Children under 13</h1>

                <h4>Please provide details for the children you are bringing to the event who are under 13 years of age.</h4>

                <div>
                    {self.getChildren().map(entry =>
                        <ChildFields data={self.props}
                            childID={entry.childID}
                        />
                    )}
                </div>

                <div className="j-page-nav">
                    <Button onClick={ this.addChild }>Add another child</Button>
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

export const ChildrenPageContainer = connect(
    mapStateToProps, actionCreators
)(ChildrenPage);