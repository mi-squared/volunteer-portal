import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link} from 'react-router';

import * as actionCreators from '../action_creators';
import composePage from './base-page.jsx';

class ExternalLoginPage extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // xxx there should be a better way to do this
        var parameters = window.location.href.split("?")[1].split("&");
        let token;
        let next;
        let username;
        parameters.map( (pair) => {
            let pairVals = pair.split("=");
            if ( pairVals[0] === 'token' ) {
                token = pairVals[1];
            }
            if ( pairVals[0] === 'next' ) {
                next = pairVals[1];
            }
            if ( pairVals[0] === 'username' ) {
                username = pairVals[1];
            }
        });

        debugger;

        // a token, username, and the next destination are all required to proceed
        if ( !token || !username || !next ) {
            this.props.history.pushState(null, '/');
            return;
        }

        // set the username in props
        this.props.updateField( {
            key: [ 'session', 'f_username' ],
            value: username
        });

        // set the token in props as is -- it will be validated downstream during use
        this.props.login({
            token: token
        });

        this.props.history.pushState(null, '/' + next);
    }

    render() {
        return (
            <div>
                Redirecting ...
            </div>
        );
    }
}

export const ExternalLoginPageContainer = connect(
    (state) => state.toJSON(), actionCreators
)(composePage(ExternalLoginPage));
