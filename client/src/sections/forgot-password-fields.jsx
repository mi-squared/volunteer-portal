import React from 'react';

import ValidatedInput from '../components/validated-input-field.jsx';
import BaseSection from './base-section.jsx'

export default class ForgotPasswordFields extends BaseSection {

    render() {
        return (
            <div>
                <ValidatedInput
                    {...this.props}
                    label="Email" type="text"
                    value={this.props.data.q_email}
                    required={true}
                    fieldName="q_email"
                    ref="q_email"
                    onChange={this.props.handleChange}/>
            </div>
        );
    }
}