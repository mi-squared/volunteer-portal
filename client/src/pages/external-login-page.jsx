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
        // xxx there should be a better way to do this?
        var params = {};
        window.location.href.split("?")[1].split("&").map( (pair) => {
            let pairVals = pair.split("=");
            params[pairVals[0]] = pairVals[1];
        });

        // a token, username, and the next destination are all required to proceed
        if ( !params.token || !params.username || !params.next ) {
            this.props.history.pushState(null, '/');
            return;
        }

        // set the username in props
        this.props.updateField( {
            key: [ 'session', 'f_username' ],
            value: params.username
        });

        // set the token in props as is -- it will be validated downstream during use
        this.props.login({
            token: params.token
        });

        this.props.history.pushState(null, '/' + params.next);
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