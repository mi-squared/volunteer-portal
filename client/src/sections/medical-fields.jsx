import React from 'react';
import ReactAddons from 'react/addons';
import Input from 'react-bootstrap/lib/Input';

import QuestionContainer from '../components/question-container.jsx';
import YesNoField from '../components/yes-no-field.jsx';
import BaseSection from './base-section.jsx'

export default class MedicalFields extends BaseSection {
    render() {
        return (
            <div>
                <QuestionContainer {...this.props}>
                    <Input type="text" label="List any specialties:"
                        type="text"
                        fieldName="q_medical_specialties"
                        value={this.props.data.q_medical_specialties}
                        onChange={this.handleChange.bind(this, "q_medical_specialties")}/>
                </QuestionContainer>

                <QuestionContainer {...this.props}>
                    <Input type="text" label="NPI"
                        fieldName="q_medical_npi"
                        value={this.props.data.q_medical_npi}
                        onChange={this.handleChange.bind(this, "q_medical_npi")}/>
                </QuestionContainer>

                <QuestionContainer {...this.props}>
                    <Input type="text" label="DEA (Optional)"
                        fieldName="q_medical_dea"
                        value={this.props.data.q_medical_dea}
                        onChange={this.handleChange.bind(this, "q_medical_dea")}/>
                </QuestionContainer>
            </div>
        );
    }
}