import React from 'react';

export default class Header extends React.Component {

    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
        this.account = this.account.bind(this);
    }

    logout() {
        this.props.reset();
        sessionStorage.clear();
        this.props.history.pushState(null, '/');
    }

    account() {
        this.props.history.pushState(null, '/account');
    }

    render() {
        return (
            <div className="container well">
                <div className="col-md-12" style={{"textAlign" : "right"}}>
                    <div>{this.props.session.f_username || this.props.data.q_email} | <a href='javascript:;' onClick={this.account}>Account</a> | <a href="javascript:;" onClick={this.logout}>Log out</a></div>
                </div>
            </div>
        );
    }
}
