import React from 'react';

import ValidatedInput from '../components/validated-input-field.jsx';
import BaseSection from './base-section.jsx'

export default class AccountFields extends BaseSection {

    render() {
        return (
            <div>
                <ValidatedInput
                    {...this.props}
                    label="Password" type="password"
                    value={this.props.data.q_password}
                    required={true}
                    fieldName="q_password"
                    ref="q_password"
                    onChange={this.props.handleChange}/>

                <ValidatedInput
                    {...this.props}
                    label="Confirm password" type="password"
                    value={this.props.data.q_password2}
                    required={true}
                    fieldName="q_password2"
                    ref="q_password2"
                    onChange={this.props.handleChange}/>
            </div>
        );
    }
}