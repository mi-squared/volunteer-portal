import React from 'react';
import ReactAddons from 'react/addons';

import ValidatedInput from '../components/validated-input-field.jsx';
import QuestionContainer from '../components/question-container.jsx';
import DropdownField from '../components/dropdown-field.jsx';
import MultiselectField from '../components/multiselect-field.jsx';
import YesNoField from '../components/yes-no-field.jsx';
import MedicalFields from './medical-fields.jsx';
import LicenseFields from './license-fields.jsx';
import BaseSection from './base-section.jsx'

export default class VolunteerGeneral extends BaseSection {
    render() {
        return (
            <div>

                <YesNoField {...this.props}
                    fieldName="data.q_volunteered_before"
                    ref="data.q_volunteered_before"
                    label="Have you volunteered for your best pathway to health before?"
                    value={this.props.data.q_volunteered_before}
                    onChange={this.handleChange}
                />

                <QuestionContainer {...this.props}
                    criteria={ {key : 'q_volunteered_before', value : "true" } }>

                    <ValidatedInput {...this.props}
                        label="What area did you work in?"
                        fieldName="data.q_volunteered_area"
                        ref="data.q_volunteered_area"
                        value={this.props.data.q_volunteered_area}
                        onChange={this.handleChange}
                    />

                    <ValidatedInput {...this.props}
                        label="In what capacity did you work?"
                        fieldName="data.q_volunteered_capacity"
                        ref="data.q_volunteered_capacity"
                        value={this.props.data.q_volunteered_capacity}
                        onChange={this.handleChange}
                    />

                </QuestionContainer>

                <YesNoField {...this.props}
                    fieldName="data.q_volunteer_organization_member"
                    ref="data.q_volunteer_organization_member"
                    label="Are you part of a volunteer group?"
                    value={this.props.data.q_volunteer_organization_member}
                    onChange={this.handleChange}
                />

                <QuestionContainer {...this.props}
                    criteria={ {key : 'q_volunteer_organization_member', value : "true" } }>

                    <ValidatedInput {...this.props}
                        label="What is the name of your volunteer group?"
                        fieldName="data.q_volunteer_organization"
                        ref="data.q_volunteer_organization"
                        value={this.props.data.q_volunteer_organization}
                        onChange={this.handleChange}
                    />

                </QuestionContainer>

                <div>
                    <label>
                        What areas would you like to volunteer in?
                    </label>
                    <div>
                        <MultiselectField
                            {...this.props}
                            value={this.props.data.q_volunteering_area}
                            placeHolder="security"
                            ref="data.q_volunteering_area"
                            fieldName="data.q_volunteering_area"
                            onChange={this.handleChange}>
                            <option value="logistics">Logistics</option>
                            <option value="security">Security</option>
                            <option value="hospitality">Hospitality</option>
                        </MultiselectField>
                    </div>
                </div>

                <YesNoField {...this.props}
                    fieldName="data.q_volunteering_in_licensed_area"
                    ref="data.q_volunteering_in_licensed_area"
                    label="Do you want to volunteer in your currently licensed area?"
                    value={this.props.data.q_volunteering_in_licensed_area}
                    onChange={this.handleChange}
                />

                <QuestionContainer {...this.props}
                    criteria={ {key : 'q_volunteering_in_licensed_area', value : "true" } }>
                    <LicenseFields {...this.props} />
                </QuestionContainer>

                <YesNoField {...this.props}
                    fieldName="data.q_is_medical_professional"
                    ref="data.q_is_medical_professional"
                    label="Are you volunteering as a medical professional?"
                    value={this.props.data.q_is_medical_professional}
                    onChange={this.handleChange}
                />

                <QuestionContainer {...this.props}
                    criteria={ {key : 'q_is_medical_professional', value : "true" } }>
                    <MedicalFields {...this.props} />
                </QuestionContainer>

                <YesNoField {...this.props}
                    fieldName="data.q_is_legal_professional"
                    ref="data.q_is_legal_professional"
                    label="Are you volunteering as a legal professional?"
                    value={this.props.data.q_is_legal_professional}
                    onChange={this.handleChange}
                />

            </div>
        );
    }
}