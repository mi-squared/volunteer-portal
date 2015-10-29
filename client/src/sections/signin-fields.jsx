import React from 'react';

import ValidatedInput from '../components/validated-input-field.jsx';
import BaseSection from './base-section.jsx'

export default class IdentityFields extends BaseSection {

    render() {
        return (
            <div>
                <ValidatedInput
                    {...this.props}
                    label="Email (username)" type="text"
                    value={this.props.data.f_username}
                    required={true}
                    fieldName="f_username"
                    ref="f_username"
                    onChange={this.handleChange}
                />

                <ValidatedInput
                    {...this.props}
                    label="Password" type="password"
                    value={this.props.data.f_password}
                    required={true}
                    fieldName="f_password"
                    ref="f_password"
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}