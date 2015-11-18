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

                        <option>Anesthesiology</option>
                        <option>Cardiology</option>
                        <option>Colorectal Surgery</option>
                        <option>Dentistry</option>
                        <option>Dermatology</option>
                        <option>Ear Nose & Throat</option>
                        <option>Emergency</option>
                        <option>Endocrinology</option>
                        <option>Gastroenterology</option>
                        <option>General Surgery</option>
                        <option>Gerontology</option>
                        <option>Gynecology Oncology</option>
                        <option>Infectious Disease</option>
                        <option>Internal Medicine</option>
                        <option>Medical Laboratory</option>
                        <option>Obstetrics & Gynecology</option>
                        <option>Oncology</option>
                        <option>Ophthalmology</option>
                        <option>Oral Surgery</option>
                        <option>Orthodontia</option>
                        <option>Orthopedics</option>
                        <option>Pediatrics</option>
                        <option>Pharmacy</option>
                        <option>Physical Therapy / Occupational Therapy</option>
                        <option>Plastic Surgery</option>
                        <option>Podiatry</option>
                        <option>Primary care</option>
                        <option>Psychiatry</option>
                        <option>Public Health</option>
                        <option>Pulmonary</option>
                        <option>Radiology</option>
                        <option>Urogynecology</option>
                        <option>Urology</option>

                    </MultiselectField>
                </div>

                <ValidatedInput
                    {...this.props}
                    type="textarea"
                    label="List any sub-specialties:"
                    value={this.props.data.q_medical_subspecialties}
                    fieldName="data.q_medical_subspecialties"
                    ref="data.q_medical_subspecialties"
                    onChange={this.handleChange}/>

                <hr/>

            </div>
        );
    }
}