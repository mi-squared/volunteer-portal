import React from 'react';

import IdentityFields from './identity-fields.jsx';
import ValidatedInput from '../components/validated-input-field.jsx';
import DateField from '../components/date-field.jsx';
import BaseSection from './base-section.jsx'

export default class RegistrationFields extends BaseSection {

    handleDateChange(date) {
        this.props.updateField( {
            key : 'q_dob',
            value : date
        });
    }

    render() {
        return (
            <div>
                <IdentityFields {...this.props} />

                <DateField
                    {...this.props}
                    label="Date of birth (mm/yy/dddd)"
                    value={this.props.data.q_dob}
                    required={true}
                    fieldName="data.q_dob"
                    ref="data.q_dob"
                    onChange={this.handleDateChange}
                />

                <ValidatedInput
                    {...this.props}
                    label="Email address" type="text"
                    value={this.props.data.q_email}
                    required={true}
                    fieldName="data.q_email"
                    ref="data.q_email"
                    onChange={this.handleChange}/>

                <ValidatedInput
                    {...this.props}
                    label="Password" type="password"
                    value={this.props.data.q_password}
                    required={true}
                    fieldName="data.q_password"
                    ref="data.q_password"
                    onChange={this.handleChange}/>
            </div>
        );
    }
}