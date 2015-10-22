import React from 'react';
import ReactAddons from 'react/addons';
import Input from 'react-bootstrap/lib/Input';

import QuestionContainer from '../components/question-container.jsx';
import DropdownField from '../components/dropdown-field.jsx';
import YesNoField from '../components/yes-no-field.jsx';

import MedicalFields from './medical-fields.jsx';
import LicenseFields from './license-fields.jsx';

export default React.createClass({
    mixins: [React.addons.PureRenderMixin],

    handleChange(field, e) {
        this.props.data.updateField( {
            key : field,
            value : e.target.value
        });
    },

    render: function() {
        return (
            <div>
                <YesNoField data={this.props.data}
                    fieldName="q_volunteer_organization_member"
                    label="You part of a volunteer group?"
                />

                <QuestionContainer data={this.props.data}
                    criteria={ {key : 'q_volunteer_organization_member', value : "true" } }>
                    <Input
                        label="Volunteer coordinating organization"
                        type="text"
                        fieldName="q_volunteer_organization"
                        value={this.props.data.q_volunteer_organization}
                        onChange={this.handleChange.bind(this, "q_volunteer_organization")}
                    />
                </QuestionContainer>

                <YesNoField data={this.props.data}
                    fieldName="q_volunteered_before"
                    label="Have you volunteered for your best pathway to health before?"
                />

                <QuestionContainer data={this.props.data}
                    criteria={ {key : 'q_volunteered_before', value : "true" } }>
                    <Input
                        label="What area did you work in?"
                        type="text"
                        fieldName="q_volunteered_area"
                        value={this.props.data.q_volunteered_area}
                        onChange={this.handleChange.bind(this, "q_volunteered_area")}/>
                </QuestionContainer>

                <QuestionContainer data={this.props.data}
                    criteria={ {key : 'q_volunteered_before', value : "true" } }>
                    <Input
                        label="In what capacity did you work?"
                        type="text"
                        fieldName="q_volunteered_capacity"
                        value={this.props.data.q_volunteered_capacity}
                        onChange={this.handleChange.bind(this, "q_volunteered_capacity")}/>
                </QuestionContainer>

                <div>
                    <label>
                        What area would you like to volunteer in? Check all that apply:
                    </label>
                    <div>
                        <DropdownField
                            selectValue={this.props.data.q_area_volunteer}
                            data={this.props.data}
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

                <YesNoField data={this.props.data}
                            fieldName="q_volunteering_in_licensed_area"
                            label="Do you want to volunteer in your currently licensed area?"
                />

                <QuestionContainer data={this.props.data}
                    criteria={ {key : 'q_volunteering_in_licensed_area', value : "true" } }>
                    <LicenseFields data={this.props.data} />
                </QuestionContainer>

                <YesNoField data={this.props.data}
                    fieldName="q_is_medical_professional"
                    label="Are you volunteering as a medical professional?"
                />

                <QuestionContainer data={this.props.data}
                    criteria={ {key : 'q_is_medical_professional', value : "true" } }>
                    <MedicalFields data={this.props.data} />
                </QuestionContainer>

                <YesNoField data={this.props.data}
                    fieldName="q_is_legal_professional"
                    label="Are you volunteering as a legal professional?"
                />

            </div>
        );
    }
});