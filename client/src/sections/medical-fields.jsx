import React from 'react';
import ReactAddons from 'react/addons';
import Input from 'react-bootstrap/lib/Input';

import ValidatedInput from '../components/validated-input-field.jsx';
import MultiselectField from '../components/multiselect-field.jsx';
import BaseSection from './base-section.jsx'

export default class MedicalFields extends BaseSection {
    render() {
        return (
            <div>

                <hr/>

                <div>
                    <MultiselectField
                        {...this.props}
                        label="List any medical specialties:"
                        value={this.props.data.q_medical_specialties}
                        placeHolder="Click to choose specialties"
                        ref="data.q_medical_specialties"
                        fieldName="data.q_medical_specialties"
                        onChange={this.handleChange}>

                        <option>Primary care</option>
                        <option>Internal Medicine</option>
                        <option>Pediatrics</option>
                        <option>Pulmonary</option>
                        <option>Cardiiology</option>
                        <option>Endocrinology</option>
                        <option>Infectious Disease</option>
                        <option>GI</option>
                        <option>Obstetrics & Gynecology</option>
                        <option>Gyn Onc</option>
                        <option>Urogynecology</option>
                        <option>General Surgery</option>
                        <option>Urology</option>
                        <option>Podiatry</option>
                        <option>Colorectal Surgery</option>
                        <option>Dermatology</option>
                        <option>Plastic Surgery</option>
                        <option>Opthalmology</option>
                        <option>Radiology</option>
                        <option>Pharmacy</option>
                        <option>Medical Laboratory</option>

                    </MultiselectField>
                </div>

                <ValidatedInput
                    {...this.props}
                    type="textarea"
                    label="List any medical sub-specialties:"
                    value={this.props.data.q_medical_subspecialties}
                    fieldName="data.q_medical_subspecialties"
                    ref="data.q_medical_subspecialties"
                    onChange={this.handleChange}/>

                <ValidatedInput
                    {...this.props}
                    label="National Provider Identifier"
                    value={this.props.data.q_medical_npi}
                    fieldName="data.q_medical_npi"
                    ref="data.q_medical_npi"
                    onChange={this.handleChange}/>

                <ValidatedInput
                    {...this.props}
                    label="DEA"
                    value={this.props.data.q_medical_dea}
                    fieldName="data.q_medical_dea"
                    ref="data.q_medical_dea"
                    onChange={this.handleChange}/>

                <hr/>

            </div>
        );
    }
}