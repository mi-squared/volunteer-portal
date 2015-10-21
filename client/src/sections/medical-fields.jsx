import React from 'react';
import ReactAddons from 'react/addons';

import Input from 'react-bootstrap/lib/Input';

import QuestionContainer from '../components/question-container.jsx';
import YesNoField from '../components/yes-no-field.jsx';

export default React.createClass({

    mixins: [React.addons.PureRenderMixin],

    handleChange(field, e) {
        this.props.data.updateField( {
            key : field,
            value : e.target.value
        });
    },

    render: function () {
        return (
            <QuestionContainer data={this.props.data}>

                <QuestionContainer data={this.props.data}>
                    <Input type="text" label="List any specialties:"
                        type="text"
                        fieldName="q_medical_specialties"
                        value={this.props.data.q_medical_specialties}
                        onChange={this.handleChange.bind(this, "q_medical_specialties")}/>
                </QuestionContainer>

                <QuestionContainer data={this.props.data}>
                    <Input type="text" label="NPI"
                        fieldName="q_medical_npi"
                        value={this.props.data.q_medical_npi}
                        onChange={this.handleChange.bind(this, "q_medical_npi")}/>
                </QuestionContainer>

                <QuestionContainer data={this.props.data}>
                    <Input type="text" label="DEA (Optional)"
                        fieldName="q_medical_dea"
                        value={this.props.data.q_medical_dea}
                        onChange={this.handleChange.bind(this, "q_medical_dea")}/>
                </QuestionContainer>

            </QuestionContainer>
        );
    }
});