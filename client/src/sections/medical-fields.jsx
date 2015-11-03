import React from 'react';
import ReactAddons from 'react/addons';
import Input from 'react-bootstrap/lib/Input';

import ValidatedInput from '../components/validated-input-field.jsx';
import BaseSection from './base-section.jsx'

export default class MedicalFields extends BaseSection {
    render() {
        return (
            <div>

                <hr/>

                <ValidatedInput
                    {...this.props}
                    label="List any specialties:"
                    value={this.props.data.q_medical_specialties}
                    fieldName="data.q_medical_specialties"
                    ref="data.q_medical_specialties"
                    onChange={this.handleChange}/>

                <ValidatedInput
                    {...this.props}
                    label="NPI"
                    value={this.props.data.q_medical_npi}
                    fieldName="data.q_medical_npi"
                    ref="data.q_medical_npi"
                    onChange={this.handleChange}/>

                <ValidatedInput
                    {...this.props}
                    label="DEA (Optional)"
                    value={this.props.data.q_medical_dea}
                    fieldName="data.q_medical_dea"
                    ref="data.q_medical_dea"
                    onChange={this.handleChange}/>

                <hr/>

            </div>
        );
    }
}