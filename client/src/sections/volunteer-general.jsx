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
            <div className="col-md-7">

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
                    <MultiselectField
                        {...this.props}
                        label="What areas would you like to volunteer in?"
                        value={this.props.data.q_volunteering_area}
                        placeHolder="Click to choose volunteer areas"
                        ref="data.q_volunteering_area"
                        fieldName="data.q_volunteering_area"
                        onChange={this.handleChange}>

                        <option value="Academy Bus Transportation">Academy Bus Transportation</option>
                        <option value="Active Manual Relaxation/Hydrotherapy">Active Manual Relaxation/Hydrotherapy</option>
                        <option value="Audio Visual">Audio Visual</option>
                        <option value="Audio Visual Food Demonstration">Audio Visual Food Demonstration</option>
                        <option value="Audiology">Audiology</option>
                        <option value="Beautician/Barber Service">Beautician/Barber Service</option>
                        <option value="Central Supply">Central Supply</option>
                        <option value="Chaplaincy">Chaplaincy</option>
                        <option value="Children’s Department Adult Volunteer">hildren’s Department Adult Volunteer</option>
                        <option value="Communications-Media">Communications-Media</option>
                        <option value="Director’s/Assistant Director’s">Director’s/Assistant Director’s</option>
                        <option value="Exit Management">Exit Management</option>
                        <option value="Eye Care">Eye Care"</option>
                        <option value="Food Demonstration">Food Demonstration</option>
                        <option value="Food Services">Food Services</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Hospitality Decorations">Hospitality Decorations</option>
                        <option value="Hospitality-Tour Guide">Hospitality-Tour Guide</option>
                        <option value="Interpretation">Interpretation</option>
                        <option value="Lab">Lab</option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="Mental Health">Mental Health</option>
                        <option value="Music Therapy">Music Therapy</option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Pharmacy">Pharmacy</option>
                        <option value="Plant Services">Plant Services</option>
                        <option value="Podiatry">Podiatry</option>
                        <option value="Primary Care">Primary Care</option>
                        <option value="Program Committee">Program Committee</option>
                        <option value="PT/OT">PT/OT</option>
                        <option value="Radiology">Radiology</option>
                        <option value="Registration">Registration</option>
                        <option value="Respiratory Therapy">Respiratory Therapy</option>
                        <option value="Registration">Registration</option>
                        <option value="Security">Security</option>
                        <option value="Surgery">Surgery</option>
                        <option value="Triage">Triage</option>
                        <option value="Volunteer Registration">Volunteer Registration</option>
                        <option value="Women’s Health">Women’s Health</option>
                    </MultiselectField>
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
                    fieldName="data.q_cpr_certified"
                    ref="data.q_cpr_certified"
                    label="Are you CPR certified?"
                    value={this.props.data.q_cpr_certified}
                    onChange={this.handleChange}
                />

                <QuestionContainer {...this.props}
                    criteria={ {key : 'q_cpr_certified', value : "true" } }>
                    <ValidatedInput {...this.props}
                        label="CPR certification expiration date:"
                        value={this.props.data.q_cpr_expiration}
                        fieldName="data.q_cpr_expiration"
                        ref="data.q_cpr_expiration"
                        placeholder="mm/dd/yyyy"
                        mask="99/99/9999"
                        onChange={this.handleChange}
                    />

                    <DropdownField {...this.props}
                        selectValue={this.props.data['q_cpr_org']}
                        label="CPR certification organization:"
                        fieldName="data.q_cpr_org"
                        ref="data.q_cpr_org"
                        onChange={this.handleChange}>
                        <option value="">-- select --</option>
                        <option value="aha">AHA</option>
                        <option value="sm">Red Cross</option>
                        <option value="other">Other</option>
                    </DropdownField>

                    <QuestionContainer {...this.props}
                        criteria={ {key : 'q_cpr_org', value : "other" } }>
                        <ValidatedInput {...this.props}
                            label=""
                            value={this.props.data.q_cpr_org_other}
                            fieldName="data.q_cpr_org_other"
                            ref="data.q_cpr_org_other"
                            onChange={this.handleChange}
                        />

                    </QuestionContainer>

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

            </div>
        );
    }
}