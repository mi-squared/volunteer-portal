import React from 'react';

import Input from 'react-bootstrap/lib/Input';

import ValidatedInput from '../components/validated-input-field.jsx';

export default React.createClass({

    componentDidMount: function() {
        if ( this.props.focusElement ) {
            this.refs[this.props.focusElement].getInputDOMNode().focus();
        }
    },

    handleChange(field, e) {
        this.props.handleChange(field, e);
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
                <ValidatedInput errorFields={this.props.errorFields}
                                bsStyle={this.handleValidationState("f_username") }
                                label="Email (username)" type="text"
                                value={this.props.data.f_username}
                                required={true}
                                fieldName="f_username"
                                ref="f_username"
                                onChange={this.handleChange.bind(this, "f_username")}/>

                <ValidatedInput errorFields={this.props.errorFields}
                                bsStyle={this.handleValidationState("f_password") }
                                label="Password" type="password"
                                value={this.props.data.f_password}
                                required={true}
                                fieldName="f_password"
                                onChange={this.handleChange.bind(this, "f_password")}/>
            </div>
        );
    }
});