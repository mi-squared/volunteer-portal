import React from 'react';

export default class Header extends React.Component {

    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.reset();
        this.props.history.pushState(null, '/');
    }

    render() {
        return (
            <div className="container well">
                <div className="col-md-12" style={{"text-align" : "right"}}>
                    <div>{this.props.session.f_username || this.props.data.q_email} <button onClick={this.logout}>logout</button></div>
                </div>
            </div>
        );
    }
}

