import React from 'react';
import ReactAddons from 'react/addons';
import Input from 'react-bootstrap/lib/Input';

import QuestionContainer from '../components/question-container.jsx';
import DateField from '../components/date-field.jsx';
import StateField from '../components/state-field.jsx';
import BaseSection from './base-section.jsx'

export default class LicenseFields extends BaseSection {

    render () {
        return (
            <div>
                <QuestionContainer {...this.props}>
                    <StateField
                        {...this.props}
                        label="State of license"
                        fieldName="q_licensed_state"/>
                </QuestionContainer>

                <QuestionContainer {...this.props} >
                    <Input
                        label="Discipline licensed in"
                        type="text"
                        fieldName="q_licensed_discipline"
                        value={this.props.data.q_licensed_discipline}
                        onChange={this.handleChange.bind(this, "q_licensed_discipline")}/>
                </QuestionContainer>

                <QuestionContainer {...this.props}>
                    <DateField
                        label="Expiration date of license (mm/yy/dddd)"
                        value={this.props.data.q_dob}
                        fieldName="q_licensed_expiration_date"
                    />

                </QuestionContainer>
            </div>
        );
    }
}