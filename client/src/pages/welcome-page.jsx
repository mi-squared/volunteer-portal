import React from 'react';

import {Router, Route, Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button.js';

import {getBuildInfo} from '../build_info.js';

export const WelcomePage = React.createClass({

    mixins: [ Router.Navigation ],

    doNew : function() {
        this.transitionTo('/new-volunteer');
    },

    doReturning : function() {
        this.transitionTo('/returning-volunteer');
    },

    lastBuilt: function() {
        return getBuildInfo().last_built
    },

    render: function() {
        var classNames = require('classnames');
        return (
            <div className={classNames("container", "welcome")}>

                <div className={classNames("row", "row-centered")}>
                    <div className={classNames("col-xs-3", "col-centered", "col-fixed")}>
                        <img src='https://nebula.wsimg.com/8e68f1340bca228875ee2056067fe0f8?AccessKeyId=6BE032335B41B50794E6&disposition=0&alloworigin=1'/>
                        <h2>Volunteer Portal</h2>
                        <h5>last build: <b>{this.lastBuilt()}</b></h5>

                        <p>
                            <Link to="/new-volunteer" className="nav-button btn btn-default">New volunteer</Link>
                        </p>
                        <p>
                            <Link to="/returning-volunteer" className="nav-button btn btn-default">Returning volunteer</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
});
