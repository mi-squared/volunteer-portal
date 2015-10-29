import React from 'react';
import ReactAddons from 'react/addons';
import Input from 'react-bootstrap/lib/Input';

import QuestionContainer from '../components/question-container.jsx';
import DropdownField from '../components/dropdown-field.jsx';
import YesNoField from '../components/yes-no-field.jsx';
import MedicalFields from './medical-fields.jsx';
import LicenseFields from './license-fields.jsx';
import BaseSection from './base-section.jsx'

export default class MedicalFields extends BaseSection {
    render() {
        return (
            <div>
                <YesNoField {...this.props}
                    fieldName="q_volunteered_before"
                    label="Have you volunteered for your best pathway to health before?"
                />

                <QuestionContainer {...this.props}
                    criteria={ {key : 'q_volunteered_before', value : "true" } }>
                    <Input
                        label="What area did you work in?"
                        type="text"
                        fieldName="q_volunteered_area"
                        value={this.props.data.q_volunteered_area}
                        onChange={this.handleChange.bind(this, "q_volunteered_area")}/>
                </QuestionContainer>

                <QuestionContainer {...this.props}
                    criteria={ {key : 'q_volunteered_before', value : "true" } }>
                    <Input
                        label="In what capacity did you work?"
                        type="text"
                        fieldName="q_volunteered_capacity"
                        value={this.props.data.q_volunteered_capacity}
                        onChange={this.handleChange.bind(this, "q_volunteered_capacity")}/>
                </QuestionContainer>

                <YesNoField {...this.props}
                    fieldName="q_volunteer_organization_member"
                    label="Are you part of a volunteer group?"
                />

                <QuestionContainer {...this.props}
                    criteria={ {key : 'q_volunteer_organization_member', value : "true" } }>
                    <Input
                        label="What is the name of your volunteer group?"
                        type="text"
                        fieldName="q_volunteer_organization"
                        value={this.props.data.q_volunteer_organization}
                        onChange={this.handleChange.bind(this, "q_volunteer_organization")}
                    />
                </QuestionContainer>

                <div>
                    <label>
                        What area would you like to volunteer in? Check all that apply:
                    </label>
                    <div>
                        <DropdownField
                            {...this.props}
                            selectValue={this.props.data.q_area_volunteer}
                            placeHolder="security"
                            field="q_volunteering_area"
                            multiple="true"
                            onChange={ function(f,e) { console.log(f,e.target.value); }}>
                            <option value="logistics">Logistics</option>
                            <option value="security">Security</option>
                            <option value="hospitality">Hospitality</option>
                        </DropdownField>
                    </div>
                </div>

                <YesNoField {...this.props}
                            fieldName="q_volunteering_in_licensed_area"
                            label="Do you want to volunteer in your currently licensed area?"
                />

                <QuestionContainer {...this.props}
                    criteria={ {key : 'q_volunteering_in_licensed_area', value : "true" } }>
                    <LicenseFields {...this.props} />
                </QuestionContainer>

                <YesNoField {...this.props}
                    fieldName="q_is_medical_professional"
                    label="Are you volunteering as a medical professional?"
                />

                <QuestionContainer {...this.props}
                    criteria={ {key : 'q_is_medical_professional', value : "true" } }>
                    <MedicalFields {...this.props} />
                </QuestionContainer>

                <YesNoField {...this.props}
                    fieldName="q_is_legal_professional"
                    label="Are you volunteering as a legal professional?"
                />

            </div>
        );
    }
}