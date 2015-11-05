import React from 'react';

import IdentityFields from './identity-fields.jsx';
import ValidatedInput from '../components/validated-input-field.jsx';
import DateField from '../components/date-field.jsx';
import BaseSection from './base-section.jsx'
import ContactFields from './contact-fields.jsx';

export default class RegistrationFields extends BaseSection {

    render() {
        return (
            <div className="col-md-7">
                <IdentityFields {...this.props} />

                <ContactFields {...this.props} onChange={this.handleChange}/>

                <ValidatedInput
                    {...this.props}
                    label="Date of birth"
                    value={this.props.data.q_dob}
                    required={true}
                    fieldName="data.q_dob"
                    ref="data.q_dob"
                    placeholder="mm/dd/yyyy"
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