import React from 'react';
import ReactAddons from 'react/addons';

import ValidatedInput from '../components/validated-input-field.jsx';
import QuestionContainer from '../components/question-container.jsx';
import DropdownField from '../components/dropdown-field.jsx';
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
                    clearIf={ { isNot : "true", fields: [
                        'data.q_volunteered_area',
                        'data.q_volunteered_capacity',
                    ] } }
                />

                <QuestionContainer {...this.props}
                    criteria={ {key : 'q_volunteered_before', value : "true" } }>

                    <VolunteerAreaField
                        {...this.props}
                        label="In what area(s) have you volunteered?"
                        value={this.props.data.q_volunteered_area}
                        placeHolder="Click to choose volunteer area(s)"
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
                        label="What area(s) would you like to volunteer in?"
                        value={this.props.data.q_volunteering_area}
                        placeHolder="Click to choose volunteer area(s)"
                        ref="data.q_volunteering_area"
                        fieldName="data.q_volunteering_area"
                        onChange={this.handleChange}/>
                </div>

                <YesNoField {...this.props}
                    fieldName="data.q_volunteering_in_licensed_area"
                    ref="data.q_volunteering_in_licensed_area"
                    label="Do you wish to volunteer in an area where you are currently professionally licensed?"
                    value={this.props.data.q_volunteering_in_licensed_area}
                    onChange={this.handleChange}
                    clearIf={ { isNot : "true", fields: [
                        'data.q_licensed_discipline',
                        'data.q_licensed_discipline_other',
                        'data.q_licensed_state',
                        'data.q_licensed_expiration_date',
                        'data.q_licensed_number',
                    ] } }
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
                    clearIf={ { isNot : "true", fields: [
                        'data.q_medical_specialties',
                        'data.q_medical_subspecialties',
                        'data.q_medical_npi',
                        'data.q_medical_dea',
                    ] } }
                />

                <QuestionContainer {...this.props}
                    criteria={ {key : 'q_is_medical_professional', value : "true" } }>
                    <MedicalFields {...this.props} />
                </QuestionContainer>

                <YesNoField {...this.props}
                    fieldName="data.q_bls_acls_certified"
                    ref="data.q_bls_acls_certified"
                    label="Are you BLS or ACLS certified?"
                    value={this.props.data.q_bls_acls_certified}
                    onChange={this.handleChange}
                    clearIf={ { isNot : "true", fields: [
                        'data.q_bls_acls_expiration',
                        'data.q_bls_acls_org',
                        'data.q_bls_acls_org_other',
                    ] } }
                />

                <QuestionContainer {...this.props}
                    criteria={ {key : 'q_bls_acls_certified', value : "true" } }>
                    <ValidatedInput {...this.props}
                        label="BLS/ACLS certification expiration date:"
                        value={this.props.data.q_bls_acls_expiration}
                        fieldName="data.q_bls_acls_expiration"
                        ref="data.q_bls_acls_expiration"
                        placeholder="mm/dd/yyyy"
                        mask="99/99/9999"
                        onChange={this.handleChange}
                    />

                    <DropdownField {...this.props}
                        selectValue={this.props.data['q_bls_acls_org']}
                        label="BLS/ACLS certification organization:"
                        fieldName="data.q_bls_acls_org"
                        ref="data.q_bls_acls_org"
                        onChange={this.handleChange}>

                    </DropdownField>

                    <QuestionContainer {...this.props}
                        criteria={ {key : 'q_bls_acls_org', value : "other" } }>
                        <ValidatedInput {...this.props}
                            label=""
                            value={this.props.data.q_bls_acls_org_other}
                            fieldName="data.q_bls_acls_org_other"
                            ref="data.q_bls_acls_org_other"
                            onChange={this.handleChange}
                        />

                    </QuestionContainer>

                </QuestionContainer>

            </div>
        );
    }
}
