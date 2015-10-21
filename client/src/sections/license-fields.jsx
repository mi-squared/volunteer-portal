import React from 'react';
import ReactAddons from 'react/addons';

import Input from 'react-bootstrap/lib/Input';
import DateTimeField from "react-bootstrap-datetimepicker";

import QuestionContainer from '../components/question-container.jsx';
import YesNoField from '../components/yes-no-field.jsx';
import DateField from '../components/date-field.jsx';
import StateField from '../components/state-field.jsx';

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

                <QuestionContainer data={this.props.data }>
                    <StateField
                        data={this.props.data}
                        label="State of license"
                        fieldName="q_licensed_state"/>
                </QuestionContainer>

                <QuestionContainer data={this.props.data} >
                    <Input
                        label="Discipline licensed in"
                        type="text"
                        fieldName="q_licensed_discipline"
                        value={this.props.data.q_licensed_discipline}
                        onChange={this.handleChange.bind(this, "q_licensed_discipline")}/>
                </QuestionContainer>

                <QuestionContainer data={this.props.data}>
                    <DateField
                        label="Expiration date of license (mm/yy/dddd)"
                        value={this.props.data.q_dob}
                        fieldName="q_licensed_expiration_date"
                    />

                </QuestionContainer>

            </QuestionContainer>
        );
    }
});