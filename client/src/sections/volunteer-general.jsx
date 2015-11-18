import React from 'react';
import ReactAddons from 'react/addons';

import ValidatedInput from '../components/validated-input-field.jsx';
import QuestionContainer from '../components/question-container.jsx';
import DropdownField from '../components/dropdown-field.jsx';
import MultiselectField from '../components/multiselect-field.jsx';
import VolunteerAreaField from '../components/volunteer-area-field.jsx';
import YesNoField from '../components/yes-no-field.jsx';
import MedicalFields from './medical-fields.jsx';
import LicenseFields from './license-fields.jsx';
import BaseSection from './base-section.jsx'

export default class VolunteerGeneral extends BaseSection {
    render() {
        return (
            <div className="col-md-12">

                <YesNoField {...this.props}
                    fieldName="data.q_volunteered_before"
                    ref="data.q_volunteered_before"
                    label="Have you volunteered for Your Best Pathway To Health before?"
                    value={this.props.data.q_volunteered_before}
                    onChange={this.handleChange}
                />

                <QuestionContainer {...this.props}
                    criteria={ {key : 'q_volunteered_before', value : "true" } }>

                    <VolunteerAreaField
                        {...this.props}
                        label="In what areas have you volunteered?"
                        value={this.props.data.q_volunteered_area}
                        placeHolder="Click to choose volunteer areas"
                        ref="data.q_volunteered_area"
                        fieldName="data.q_volunteered_area"
                        onChange={this.handleChange}/>

                    <ValidatedInput {...this.props}
                        label="What was your position?"
                        fieldName="data.q_volunteered_capacity"
                        ref="data.q_volunteered_capacity"
                        value={this.props.data.q_volunteered_capacity}
                        onChange={this.handleChange}
                    />

                </QuestionContainer>

                <div>
                    <VolunteerAreaField
                        {...this.props}
                        label="What areas would you like to volunteer in?"
                        value={this.props.data.q_volunteering_area}
                        placeHolder="Click to choose volunteer areas"
                        ref="data.q_volunteering_area"
                        fieldName="data.q_volunteering_area"
                        onChange={this.handleChange}/>
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
                    label="Are you volunteering as a medical or dental professional?"
                    value={this.props.data.q_is_medical_professional}
                    onChange={this.handleChange}
                />

                <QuestionContainer {...this.props}
                    criteria={ {key : 'q_is_medical_professional', value : "true" } }>
                    <MedicalFields {...this.props} />
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

            </div>
        );
    }
}