import React from 'react';

import ValidatedInput from '../components/validated-input-field.jsx';
import DropdownField from '../components/dropdown-field.jsx';
import QuestionContainer from '../components/question-container.jsx';
import BaseSection from './base-section.jsx'

export default class StudentFields extends BaseSection {

    render() {
        return (
            <QuestionContainer {...this.props}
                criteria={ {key : 'q_is_student', value : "true" } }>

                <div className="row">
                    <div className="col-md-6">
                        <ValidatedInput
                            {...this.props}
                            label="Name of school"
                            type="text"
                            fieldName="data.q_school_name"
                            ref="data.q_school_name"
                            value={this.props.data.q_school_name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <DropdownField {...this.props}
                            label="School level"
                            selectValue={this.props.data['q_school_level']}
                            fieldName="data.q_school_level"
                            ref="data.q_school_level"
                            onChange={this.handleChange}>
                            <option value="">-- select --</option>
                            <option value="highschool">High school</option>
                            <option value="college">College</option>
                            <option value="university">University</option>
                        </DropdownField>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <ValidatedInput
                            {...this.props}
                            label="Area of study"
                            type="text"
                            fieldName="data.q_school_studied_area"
                            ref="data.q_school_studied_area"
                            value={this.props.data.q_school_studied_area}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <ValidatedInput
                            {...this.props}
                            label="Date of anticipated graduation"
                            value={this.props.data.q_date_graduation}
                            fieldName="data.q_date_graduation"
                            ref="data.q_date_graduation"
                            placeholder="mm/dd/yyyy"
                            mask="99/99/9999"
                            onChange={this.handleChange}/>
                    </div>
                </div>

                <ValidatedInput
                    {...this.props}
                    label="Name of Sponsor (School dean, counselor, chair, Prof or teacher)"
                    type="text"
                    fieldName="data.q_school_sponsor"
                    ref="data.q_school_sponsor"
                    value={this.props.data.q_school_sponsor}
                    onChange={this.handleChange}
                />

            </QuestionContainer>
        );
    }
}
