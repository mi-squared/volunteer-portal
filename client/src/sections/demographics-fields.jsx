import React from 'react';

import Input from 'react-bootstrap/lib/Input';
import QuestionContainer from '../components/question-container.jsx';
import ValidatedInput from '../components/validated-input-field.jsx';
import YesNoField from '../components/yes-no-field.jsx';
import DropdownField from '../components/dropdown-field.jsx';
import LanguageField from '../components/language-field.jsx';

import ContactFields from './contact-fields.jsx';
import IdentityFields from './identity-fields.jsx';
import StudentFields from './student-fields.jsx';
import BaseSection from './base-section.jsx'

export default class DemographicsFields extends BaseSection {
    render() {
        return (
            <div className="col-md-12">
                <IdentityFields {...this.props} onChange={this.handleChange}/>

                <ValidatedInput
                    {...this.props}
                    label="Date of birth"
                    value={this.props.data.q_dob}
                    required={true}
                    fieldName="data.q_dob"
                    ref="data.q_dob"
                    placeholder="mm/dd/yyyy"
                    mask="99/99/9999"
                    onChange={this.handleChange}/>

                <ContactFields {...this.props} onChange={this.handleChange}/>

                <div className="row">
                    <div className="col-md-9">
                        <ValidatedInput {...this.props}
                            label="Emergency contact name"
                            type="text"
                            fieldName="data.q_emergency_contact_name"
                            ref="data.q_emergency_contact_name"
                            value={this.props.data.q_emergency_contact_name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="col-md-3">
                        <ValidatedInput {...this.props}
                            label="Phone number"
                            type="text"
                            fieldName="data.q_emergency_contact_phonenumber"
                            ref="data.q_emergency_contact_phonenumber"
                            value={this.props.data.q_emergency_contact_phonenumber}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <ValidatedInput {...this.props}
                    label="Relationship"
                    type="text"
                    fieldName="data.q_emergency_contact_relationship"
                    ref="data.q_emergency_contact_relationship"
                    value={this.props.data.q_emergency_contact_relationship}
                    onChange={this.handleChange}
                />

                <DropdownField {...this.props}
                    label="Gender"
                    selectValue={this.props.data['q_gender']}
                    fieldName="data.q_gender"
                    ref="data.q_gender"
                    onChange={this.handleChange}>
                    <option value="">-- select --</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </DropdownField>

                <DropdownField {...this.props}
                    selectValue={this.props.data['q_tshirt']}
                    label="Shirt size"
                    fieldName="data.q_tshirt"
                    ref="data.q_tshirt"
                    onChange={this.handleChange}>
                    <option value="">-- select --</option>
                    <option value="xsm">Extra small</option>
                    <option value="sm">Small</option>
                    <option value="med">Medium</option>
                    <option value="lrg">Large</option>
                    <option value="xlrg">Extra large</option>
                </DropdownField>

                <LanguageField {...this.props}
                    label="Languages spoken"
                    fieldName="data.q_languages"
                    ref="data.q_languages"
                    value={this.props.data.q_languages}
                    onChange={this.handleChange}
                />

                <YesNoField
                    {...this.props}
                    fieldName="data.q_is_adventist"
                    ref="data.q_is_adventist"
                    label="Are you a committed Seventh-day Adventist in good standing and do you believe in all the fundamental beliefs of the church?"
                    value={this.props.data.q_is_adventist}
                    onChange={this.handleChange}
                    clearIf={ { isNot : "true", fields: [
                        'data.q_church_name',
                        'data.q_church_pastor_name',
                        'data.q_church_pastor_email',
                        'data.q_church_pastor_phone',
                    ] } }
                />

                <QuestionContainer {...this.props} criteria={ {key : 'q_is_adventist', value : "true" } }>
                    <ValidatedInput {...this.props}
                        label="Church name" type="text"
                        fieldName="data.q_church_name"
                        ref="data.q_church_name"
                        value={this.props.data.q_church_name}
                        onChange={this.handleChange}
                    />

                    <ValidatedInput {...this.props}
                        label="Pastor name" type="text"
                        fieldName="data.q_church_pastor_name"
                        ref="data.q_church_pastor_name"
                        value={this.props.data.q_church_pastor_name}
                        onChange={this.handleChange}
                    />

                    <div className="row">
                        <div className="col-md-6">
                            <ValidatedInput {...this.props}
                                label="Pastor email" type="text"
                                fieldName="data.q_church_pastor_email"
                                ref="data.q_church_pastor_email"
                                value={this.props.data.q_church_pastor_email}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <ValidatedInput {...this.props}
                                label="Pastor contact number" type="text"
                                fieldName="data.q_church_pastor_phone"
                                ref="data.q_church_pastor_phone"
                                value={this.props.data.q_church_pastor_phone}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                </QuestionContainer>

                <QuestionContainer {...this.props} criteria={ {key : 'q_is_adventist', value : "false" } }>
                    <ValidatedInput {...this.props}
                        label="Church affiliation" type="text"
                        fieldName="data.q_church_affiliation"
                        ref="data.q_church_affiliation"
                        value={this.props.data.q_church_affiliation}
                        onChange={this.handleChange}
                    />
                </QuestionContainer>

                <YesNoField {...this.props}
                    fieldName="data.q_bringing_children"
                    label="Are you bringing children under 13?"
                    value={this.props.data.q_bringing_children}
                    onChange={this.handleChange}
                />

                <YesNoField {...this.props}
                    fieldName="data.q_is_student"
                    label="Are you a student volunteer?"
                    value={this.props.data.q_is_student}
                    onChange={this.handleChange}
                    clearIf={ { isNot : "true", fields: [
                        'data.q_school_name',
                        'data.q_school_level',
                        'data.q_school_studied_area',
                        'data.q_date_graduation',
                        'data.q_school_sponsor',
                    ] } }
                />

                <StudentFields {...this.props} onChange={this.handleChange}/>

                <YesNoField {...this.props}
                    fieldName="data.q_volunteer_organization_member"
                    ref="data.q_volunteer_organization_member"
                    label="Are you part of a volunteer group?"
                    value={this.props.data.q_volunteer_organization_member}
                    onChange={this.handleChange}clearIf={ { isNot : "true", fields: [
                        'data.q_volunteer_organization',
                    ] } }
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
            </div>
        );
    }
}
