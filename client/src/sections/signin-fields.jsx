import React from 'react';

import ValidatedInput from '../components/validated-input-field.jsx';
import BaseSection from './base-section.jsx'

export default class SigninFields extends BaseSection {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
    handleKeyDown(e) {
        let node =this.refs['session.f_password'];
        let password = node.getValue();
        node.commitChange(password);  //update the password as you type
    }

    render() {
        return (
            <div className="col-md-12">
                <ValidatedInput
                    {...this.props}
                    label="Email (username)" type="text"
                    value={this.props.session.f_username}
                    required={true}
                    fieldName="session.f_username"
                    ref="session.f_username"
                    onChange={this.handleChange}
                />

                <ValidatedInput
                    {...this.props}
                    label="Password" type="password"
                    value={this.props.session.f_password}
                    required={true}
                    fieldName="session.f_password"
                    ref="session.f_password"
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );
    }
}
