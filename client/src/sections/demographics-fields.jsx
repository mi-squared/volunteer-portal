import React from 'react';

import Input from 'react-bootstrap/lib/Input';
import QuestionContainer from '../components/question-container.jsx';
import ValidatedInput from '../components/validated-input-field.jsx';
import YesNoField from '../components/yes-no-field.jsx';
import DropdownField from '../components/dropdown-field.jsx';

import ContactFields from './contact-fields.jsx';
import IdentityFields from './identity-fields.jsx';
import StudentFields from './student-fields.jsx';

export default React.createClass({

    handleChange(field, e) {
        this.props.data.updateField( {
            key : field,
            value : e.target.value
        });
    },

    // todo - this should be in a module
    handleValidationState: function(field, e) {
        if ( !this.props.errorFields ) {
            return;
        }
        var state;
        this.props.errorFields.map(entry => {
            if ( entry.field === field && !state ) {
                state = "error";
            }
        });

        return state;
    },

    render: function() {
        return (
            <div>
                <IdentityFields {...this.props} focusElement="f_first_name" />

                <ContactFields {...this.props} />

                <hr/>

                <QuestionContainer data={this.props.data}>
                    <Input
                        label="Emergency contact name"
                        type="text"
                        fieldName="q_emergency_contact_name"
                        value={this.props.data.q_emergency_contact_name}
                        onChange={this.handleChange.bind(this, "q_emergency_contact_name")}
                    />
                </QuestionContainer>

                <QuestionContainer data={this.props.data}>
                    <Input
                        label="Relationship"
                        type="text"
                        fieldName="q_emergency_contact_relationship"
                        value={this.props.data.q_emergency_contact_relationship}
                        onChange={this.handleChange.bind(this, "q_emergency_contact_relationship")}
                    />
                </QuestionContainer>

                <QuestionContainer data={this.props.data}>
                    <Input
                        label="Phone number"
                        type="text"
                        fieldName="q_emergency_contact_phonenumber"
                        value={this.props.data.q_emergency_contact_phonenumber}
                        onChange={this.handleChange.bind(this, "q_emergency_contact_phonenumber")}
                    />
                </QuestionContainer>

                <QuestionContainer data={this.props.data}>
                    <ValidatedInput
                        errorFields={this.props.errorFields}
                        required={true}
                        label="Date of birth" type="text"
                        fieldName="q_dob"
                        value={this.props.data.q_dob}
                        onChange={this.handleChange.bind(this, "q_dob")}/>
                </QuestionContainer>

                <hr/>

                <QuestionContainer data={this.props.data}>
                    <DropdownField
                        label="Race / Ethnicity"
                        selectValue={this.props.data['q_race_ethnicity']}
                        data={this.props.data}
                        onChange={this.handleChange.bind(this, "q_race_ethnicity")}>
                        <option value="white">White</option>
                        <option value="african-american">African American</option>
                        <option value="asian">Asian</option>
                        <option value="pacific-islander">Pacific Islander</option>
                        <option value="other">Other</option>
                    </DropdownField>
                </QuestionContainer>

                <QuestionContainer data={this.props.data}>
                    <DropdownField
                        label="Gender"
                        selectValue={this.props.data['q_gender']}
                        data={this.props.data}
                        onChange={this.handleChange.bind(this, "q_gender")}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="trans-male">Transgendered Male</option>
                        <option value="trans-female">Transgendered Male</option>
                    </DropdownField>
                </QuestionContainer>

                <QuestionContainer>
                    <Input label="Languages spoken" type="textarea"
                        fieldName="q_languages"
                        value={this.props.data.q_languages}
                        onChange={this.handleChange.bind(this, "q_languages")}
                    />
                </QuestionContainer>

                <YesNoField data={this.props.data}
                    fieldName="q_is_adventist"
                    label="Are you a committed Seventh-day Adventist in good standing and do you believe in all the fundamental beliefs of the church?"
                />

                <QuestionContainer data={this.props.data} criteria={ {key : 'q_is_adventist', value : "true" } }>
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

                <QuestionContainer data={this.props.data} criteria={ {key : 'q_is_adventist', value : "false" } }>
                    <Input label="Church affiliation" type="text"
                        onChange={this.handleChange.bind(this, "q_church_affiliation")}/>
                </QuestionContainer>

                <YesNoField data={this.props.data}
                    fieldName="q_bringing_children"
                    label="Are you bringing children under 13?"
                />

                <YesNoField data={this.props.data}
                    fieldName="q_is_student"
                    label="Are you a student volunteer?"
                />

                <StudentFields
                    errorFields={this.props.errorFields}
                    data={this.props.data} />
            </div>
        );
    }
});