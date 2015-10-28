import React from 'react';
import Input from 'react-bootstrap/lib/Input';

import QuestionContainer from '../components/question-container.jsx';
import ValidatedInput from '../components/validated-input-field.jsx';

export default React.createClass({

    // todo - common to all sections - make into a mixin
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

    componentWillReceiveProps: function(nextProps) {
        if ( nextProps.submitTS !== this.props.submitTS ) {
            var self = this;
            setTimeout( function() {
                var ref = self.refs[nextProps.focusElement];
                if (ref ) {
                    ref.getInputDOMNode().focus();
                }
            }, 1);
        }
    },

    render: function() {
        return (
            <div>
                <div>
                    <ValidatedInput
                        focusElement={this.props.focusElement}
                        onBlur={this.props.onBlur}
                        errorFields={this.props.errorFields}
                        required={true}
                        label="First name"
                        type="text"
                        fieldName="q_first_name"
                        ref="q_first_name"
                        value={this.props.data.q_first_name}
                        onChange={this.handleChange.bind(this, "q_first_name")}/>
                    <ValidatedInput
                        focusElement={this.props.focusElement}
                        onBlur={this.props.onBlur}
                        errorFields={this.props.errorFields}
                        label="Middle name" type="text"
                        fieldName="q_middle_name"
                        ref="q_middle_name"
                        value={this.props.data.q_middle_name}
                        onChange={this.handleChange.bind(this, "q_middle_name")}/>
                    <ValidatedInput
                        focusElement={this.props.focusElement}
                        onBlur={this.props.onBlur}
                        errorFields={this.props.errorFields}
                        required={true}
                        label="Last name"
                        type="text"
                        fieldName="q_last_name"
                        ref="q_last_name"
                        value={this.props.data.q_last_name}
                        onChange={this.handleChange.bind(this, "q_last_name")}/>
                </div>
            </div>
        );
    }
});