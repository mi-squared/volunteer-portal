import React from 'react';
import ReactAddons from 'react/addons';
import Input from 'react-bootstrap/lib/Input';

import QuestionContainer from '../components/question-container.jsx';
import ValidatedInput from '../components/validated-input-field.jsx';
import StateField from '../components/state-field.jsx';
import BaseSection from './base-section.jsx'
import DropdownField from '../components/dropdown-field.jsx';

export default class LicenseFields extends BaseSection {

    render () {
        return (
            <div >
                <div>
                    <hr/>
                </div>

                <DropdownField {...this.props}
                    selectValue={this.props.data['q_licensed_discipline']}
                    label="Professional license or certification in:"
                    fieldName="data.q_licensed_discipline"
                    ref="data.q_licensed_discipline"
                    onChange={this.handleChange}
                    required={true}>
                    <option value="">-- select --</option>
                    <option value="Advanced Registered Nurse Practitioner">Advanced Registered Nurse Practitioner</option>
                    <option value="Audiologist">Audiologist</option>
                    <option value="Certified Counselor">Certified Counselor</option>
                    <option value="Certified Massage Therapist">Certified Massage Therapist</option>
                    <option value="Certified Midwife">Certified Midwife</option>
                    <option value="Certified Nurse Midwife">Certified Nurse Midwife</option>
                    <option value="Certified Nursing Assistant">Certified Nursing Assistant</option>
                    <option value="Certified Radiologic Technologist">Certified Radiologic Technologist</option>
                    <option value="Certified Registered Nurse Anesthetist">Certified Registered Nurse Anesthetist</option>
                    <option value="Chiropractor">Chiropractor</option>
                    <option value="Dental Assistant">Dental Assistant</option>
                    <option value="Dental Hygienist">Dental Hygienist</option>
                    <option value="Dentist">Dentist</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Drivers License Commercial Class A">Drivers License Commercial Class A</option>
                    <option value="Drivers License Commercial Class B">Drivers License Commercial Class B</option>
                    <option value="Drivers License Commercial Class C">Drivers License Commercial Class C</option>
                    <option value="Emergency Medical Technician">Emergency Medical Technician</option>
                    <option value="Laboratory Technician">Laboratory Technician</option>
                    <option value="Licensed Massage Therapist">Licensed Massage Therapist</option>
                    <option value="Licensed Vocational or Practical Nurse">Licensed Vocational or Practical Nurse</option>
                    <option value="Naturopath">Naturopath</option>
                    <option value="Occupational Therapist">Occupational Therapist</option>
                    <option value="Ophthalmologist">Ophthalmologist</option>
                    <option value="Optician">Optician</option>
                    <option value="Optometrist">Optometrist</option>
                    <option value="Osteopath">Osteopath</option>
                    <option value="Paramedic">Paramedic</option>
                    <option value="Physical Therapist">Physical Therapist</option>
                    <option value="Physician's Assistant">Physician's Assistant</option>
                    <option value="Podiatrist">Podiatrist</option>
                    <option value="Registered Dietitian">Registered Dietitian</option>
                    <option value="Registered Nurse">Registered Nurse</option>
                    <option value="Respiratory Therapist">Respiratory Therapist</option>
                    <option value="Social Worker">ocial Worker</option>
                    <option value="Speech & Language Pathologist">Speech & Language Pathologist</option>
                    <option value="Surgical Technician">Surgical Technician</option>
                    <option value="Ultrasound Technician">Ultrasound Technician</option>
                    <option value="other">Other</option>
                </DropdownField>

                <QuestionContainer {...this.props}
                    criteria={ {key : 'q_licensed_discipline', value : "other" } }>
                    <ValidatedInput {...this.props}
                        label=""
                        value={this.props.data.q_licensed_discipline_other}
                        fieldName="data.q_licensed_discipline_other"
                        ref="data.q_licensed_discipline_other"
                        onChange={this.handleChange}
                        required={true}
                    />
                </QuestionContainer>

                <div className="row">
                    <div className="col-md-3">
                        <StateField
                            {...this.props}
                            label="State of license"
                            ref="data.q_licensed_state"
                            fieldName="data.q_licensed_state"
                            onChange={this.handleChange}
                            required={true}
                        />
                    </div>
                    <div className="col-md-9">
                        <ValidatedInput
                            {...this.props}
                            label="Expiration date of license"
                            value={this.props.data.q_license_expiration}
                            fieldName="data.q_license_expiration"
                            ref="data.q_license_expiration"
                            placeholder="mm/dd/yyyy"
                            mask="99/99/9999"
                            onChange={this.handleChange}
                            required={true}
                            />
                    </div>

                </div>

                <ValidatedInput
                    {...this.props}
                    label="License number"
                    value={this.props.data.q_licensed_number}
                    fieldName="data.q_licensed_number"
                    ref="data.q_licensed_number"
                    onChange={this.handleChange}
                    required={true}
                />

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

                <div>
                    <hr/>
                </div>
            </div>
        );
    }
}