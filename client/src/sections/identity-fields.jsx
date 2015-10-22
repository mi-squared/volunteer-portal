import React from 'react';
import Input from 'react-bootstrap/lib/Input';

import QuestionContainer from '../components/question-container.jsx';
import ValidatedInput from '../components/validated-input-field.jsx';

export default React.createClass({

    handleChange(field, e) {
        if ( this.props.onChange ) {
            this.props.onChange(field, e);
        } else if ( this.props.data.updateField ){
            this.props.data.updateField( {
                key : field,
                value : e.target.value
            });
        }
    },

    componentDidMount: function() {
        if ( this.props.focusElement ) {
            this.refs[this.props.focusElement].getInputDOMNode().focus();
        }
    },

    isRequired: function(field) {
        return this.props.requiredFields
            && this.props.requiredFields.indexOf(field) > -1;
    },

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
                <div>
                    <ValidatedInput
                        onBlur={this.props.onBlur}
                        errorFields={this.props.errorFields}
                        required={true}
                        ref="f_first_name"
                        label="First name"
                        type="text"
                        fieldName="q_first_name"
                        value={this.props.data.q_first_name}
                        onChange={this.handleChange.bind(this, "q_first_name")}/>
                    <ValidatedInput
                        onBlur={this.props.onBlur}
                        errorFields={this.props.errorFields}
                        ref="f_middle_name"
                        label="Middle name" type="text"
                        fieldName="q_middle_name"
                        value={this.props.data.q_middle_name}
                        onChange={this.handleChange.bind(this, "q_middle_name")}/>
                    <ValidatedInput
                        onBlur={this.props.onBlur}
                        errorFields={this.props.errorFields}
                        required={true}
                        ref="f_last_name"
                        label="Last name"
                        type="text"
                        fieldName="q_last_name"
                        value={this.props.data.q_last_name}
                        onChange={this.handleChange.bind(this, "q_last_name")}/>
                </div>
            </div>
        );
    }
});