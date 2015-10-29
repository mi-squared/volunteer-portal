import React from 'react';

import Input from 'react-bootstrap/lib/Input';

import DateField from '../components/date-field.jsx';
import DropdownField from '../components/dropdown-field.jsx';
import QuestionContainer from '../components/question-container.jsx';
import BaseSection from './base-section.jsx'

export default class MedicalFields extends BaseSection {
    render() {
        return (
            <QuestionContainer {...this.props}
                criteria={ {key : 'q_is_student', value : "true" } }>

                <div>
                    <DropdownField
                        {...this.props}
                        label="School level"
                        selectValue={this.props.data['q_school_level']}
                        onChange={this.handleChange.bind(this, "q_school_level")}>
                        <option value="highschool">High school</option>
                        <option value="college">College</option>
                        <option value="university">University</option>
                    </DropdownField>
                </div>

                <div>
                    <Input label="Name of school" type="text"
                        value={this.props.data['q_school_name']}
                        onChange={this.handleChange.bind(this, "q_school_name")} />
                </div>

                <div>
                    <Input label="Area of study" type="text"
                        value={this.props.data['q_school_studied_area']}
                        onChange={this.handleChange.bind(this, "q_school_studied_area")} />
                </div>

                <div>
                    <DateField
                        label="Date of anticipated graduation"
                        value={this.props.data.q_date_graduation}
                        fieldName="data.q_date_graduation"
                    />
                </div>

                <div>
                    <Input label="Name of Sponsor (School dean, counselor, chair, Prof or teacher)" type="text"
                        value={this.props.data['q_school_sponsor']}
                        onChange={this.handleChange.bind(this, "q_school_sponsor")} />
                </div>

            </QuestionContainer>
        );
    }
}