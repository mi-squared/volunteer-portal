import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button.js';

import RegistrationFields from '../sections/registration-fields.jsx';
import * as actionCreators from '../action_creators';



class DoRegisterPage extends React.Component {
  constructor(props) {
      super(props);
      this.doContinue = this.doContinue.bind(this)
  }

    doContinue() {
        // todo - reinitialize state
        this.props.history.pushState(null, '/main');
    }

    render() {
        return (
            <div className="container well">
                <div className="col-md-12">
                    <h1>Volunteer Application</h1>
                </div>

                <div className="col-md-12" id="thank-you">
                    Thank you for registering. You will receive an email notification containing your account information.
                    Please click 'Apply' to proceed to the volunteer application form.
                </div>

                <div className="j-page-nav col-md-12">
                    <Button onClick={this.doContinue} id="submit-register" className="btn btn-primary">Apply</Button>
                </div>

            </div>
        );
    }
};


function mapStateToProps(state) {
    return state.toJSON();
}

export const DoRegisterPageContainer = connect(
    mapStateToProps, actionCreators
)(DoRegisterPage);
