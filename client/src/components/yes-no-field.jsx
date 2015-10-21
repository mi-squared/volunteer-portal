import React from 'react';

import Input from 'react-bootstrap/lib/Input';
import QuestionContainer from './question-container.jsx';

export default React.createClass({

    handleChange(field, e) {
        this.props.data.updateField( {
            key : field,
            value : e.target.value
        });
    },

    render: function() {
        return (
            <QuestionContainer props={this.props.data}>
                <label>
                    {this.props.label}
                </label>

                <Input type="radio"
                    label="Yes"
                    ref={this.props.fieldName}
                    name={this.props.fieldName}
                    value="true"
                    checked={this.props.data[this.props.fieldName] === "true"}
                    onChange={this.handleChange.bind(this, this.props.fieldName)}/>

                <Input type="radio"
                    label="No"
                    ref={this.props.fieldName}
                    name={this.props.fieldName}
                    value="false"
                    checked={this.props.data[this.props.fieldName] !== "true"}
                    onChange={this.handleChange.bind(this, this.props.fieldName)}/>
            </QuestionContainer>
        );
    }
});