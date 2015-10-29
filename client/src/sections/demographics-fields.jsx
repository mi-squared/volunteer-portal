import React from 'react';

import Input from 'react-bootstrap/lib/Input';
import QuestionContainer from '../components/question-container.jsx';
import ValidatedInput from '../components/validated-input-field.jsx';
import YesNoField from '../components/yes-no-field.jsx';
import DropdownField from '../components/dropdown-field.jsx';

import ContactFields from './contact-fields.jsx';
import IdentityFields from './identity-fields.jsx';
import StudentFields from './student-fields.jsx';
import BaseSection from './base-section.jsx'

export default class DemographicsFields extends BaseSection {
    render() {
        return (
            <div>
                <IdentityFields {...this.props} onChange={this.handleChange}/>

                <ContactFields {...this.props} onChange={this.handleChange}/>

                <hr/>

                <QuestionContainer {...this.props}>
                    <Input
                        label="Emergency contact name"
                        type="text"
                        fieldName="data.q_emergency_contact_name"
                        ref="data.q_emergency_contact_name"
                        value={this.props.data.q_emergency_contact_name}
                        onChange={this.handleChange.bind(this, "q_emergency_contact_name")}
                    />
                </QuestionContainer>

                <QuestionContainer {...this.props}>
                    <Input
                        label="Relationship"
                        type="text"
                        fieldName="data.q_emergency_contact_relationship"
                        ref="data.q_emergency_contact_relationship"
                        value={this.props.data.q_emergency_contact_relationship}
                        onChange={this.handleChange.bind(this, "q_emergency_contact_relationship")}
                    />
                </QuestionContainer>

                <QuestionContainer {...this.props}>
                    <Input
                        label="Phone number"
                        type="text"
                        fieldName="data.q_emergency_contact_phonenumber"
                        ref="data.q_emergency_contact_phonenumber"
                        value={this.props.data.q_emergency_contact_phonenumber}
                        onChange={this.handleChange.bind(this, "q_emergency_contact_phonenumber")}
                    />
                </QuestionContainer>

                <QuestionContainer {...this.props}>
                    <ValidatedInput
                        {...this.props}
                        required={true}
                        label="Date of birth" type="text"
                        fieldName="data.q_dob"
                        ref="data.q_dob"
                        value={this.props.data.q_dob}
                        onChange={this.handleChange.bind(this, "q_dob")}/>
                </QuestionContainer>

                <hr/>

                <QuestionContainer {...this.props}>
                    <DropdownField
                        {...this.props}
                        label="Race / Ethnicity"
                        selectValue={this.props.data['q_race_ethnicity']}
                        ref="data.q_race_ethnicity"
                        onChange={this.handleChange.bind(this, "q_race_ethnicity")}>
                        <option value="white">White</option>
                        <option value="african-american">African American</option>
                        <option value="asian">Asian</option>
                        <option value="pacific-islander">Pacific Islander</option>
                        <option value="other">Other</option>
                    </DropdownField>
                </QuestionContainer>

                <QuestionContainer {...this.props}>
                    <DropdownField
                        {...this.props}
                        label="Gender"
                        selectValue={this.props.data['q_gender']}
                        ref="data.q_gender"
                        onChange={this.handleChange.bind(this, "q_gender")}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="trans-male">Transgendered Male</option>
                        <option value="trans-female">Transgendered Male</option>
                    </DropdownField>
                </QuestionContainer>

                <QuestionContainer {...this.props}>
                    <DropdownField
                        {...this.props}
                        label="Shirt size"
                        selectValue={this.props.data['q_tshirt']}
                        ref="data.q_tshirt"
                        onChange={this.handleChange.bind(this, "q_tshirt")}>
                        <option value="xsm">Extra small</option>
                        <option value="sm">Small</option>
                        <option value="med">Medium</option>
                        <option value="lrg">Large</option>
                        <option value="xlrg">Extra large</option>
                    </DropdownField>
                </QuestionContainer>

                <QuestionContainer>
                    <Input label="Languages spoken" type="textarea"
                        fieldName="data.q_languages"
                        ref="data.q_languages"
                        value={this.props.data.q_languages}
                        onChange={this.handleChange.bind(this, "q_languages")}
                    />
                </QuestionContainer>

                <YesNoField {...this.props}
                    fieldName="data.q_is_adventist"
                    ref="data.q_is_adventist"
                    label="Are you a committed Seventh-day Adventist in good standing and do you believe in all the fundamental beliefs of the church?"
                />

                <QuestionContainer {...this.props} criteria={ {key : 'q_is_adventist', value : "true" } }>
                    <Input label="Church name" type="text" value={this.props.data.q_church_name}
                        onChange={this.handleChange.bind(this, "q_church_name")}
                    />
                    <Input label="Pastor name" type="text" value={this.props.data.q_church_pastor_name}
                        onChange={this.handleChange.bind(this, "q_church_pastor_name")}
                    />
                    <Input label="Pastor email" type="text" value={this.props.data.q_church_pastor_email}
                        onChange={this.handleChange.bind(this, "q_church_pastor_email")}
                    />
                    <Input label="Pastor contact number" type="text" value={this.props.data.q_church_pastor_phone}
                        onChange={this.handleChange.bind(this, "q_church_pastor_phone")}
                    />
                </QuestionContainer>

                <QuestionContainer {...this.props} criteria={ {key : 'q_is_adventist', value : "false" } }>
                    <Input label="Church affiliation" type="text"
                        onChange={this.handleChange.bind(this, "q_church_affiliation")}/>
                </QuestionContainer>

                <YesNoField {...this.props}
                    fieldName="data.q_bringing_children"
                    label="Are you bringing children under 13?"
                />

                <YesNoField {...this.props}
                    fieldName="data.q_is_student"
                    label="Are you a student volunteer?"
                />

                <StudentFields {...this.props} />
            </div>
        );
    }
}