import React from 'react';

import {Router, Route, Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button.js';

import {getBuildInfo} from '../build_info.js';

export const WelcomePage = React.createClass({

    mixins: [ Router.Navigation ],

    doNew : function() {
        this.props.history.pushState(null, '/new-volunteer');
    },

    doReturning : function() {
        this.props.history.pushState(null, '/returning-volunteer');
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
                          <Button className="nav-button" onClick={this.doNew}>New volunteer</Button>
                      </p>
                      <p>
                          <Button className="nav-button" onClick={this.doReturning}>Returning volunteer</Button>
                      </p>
                  </div>
              </div>
              <div className="row row-centered" style={{fontSize: '1.5rem'}}>
                <div className="col-xs-9 col-md-8 col col-centered">
                  <div className="text-left">
                    <h3>
                      Thank you
                    </h3>
                    For volunteering to assist Pathway To Health and the citizens of the Greater Los Angeles area.
                    <h3>
                      Instructions:
                    </h3>
                    <ol className="text-left" style={{lineHeight: '2.3rem'}}>
                      <li style={{paddingBottom: '1.5rem'}}>
                        Please fill out all areas of the form that pertain to you. It is <strong>VERY IMPORTANT</strong> that
                        you double check you did not miss any question before moving on to the next section.
                      </li>
                      <li>
                        <strong>RETURNING VOLUNTEERS</strong>: Click the '<u>Returning Volunteer</u>' link above and then
                        the '<u>Forgot Password</u>' link on the following page. Enter your email address, you will receive
                        an email with a link to change your password. Click that link and enter a new password. Next please go through
                        the entire form and update your information and <em>PLEASE</em> answer all questions.
                      </li>
                      <br />
                      <li style={{listStyleType: "none"}}>
                        Blessings,<br />
                        Thank You
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
        );
    }
});
