import React from 'react';

import ValidatedInput from '../components/validated-input-field.jsx';
import BaseSection from './base-section.jsx'

export default class SigninFields extends BaseSection {

    render() {
        return (
            <div className="col-md-7">
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
                />
            </div>
        );
    }
}