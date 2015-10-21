import React from 'react';

import Input from 'react-bootstrap/lib/Input';

import IdentityFields from './identity-fields.jsx';

import ValidatedInput from '../components/validated-input-field.jsx';
import DateField from '../components/date-field.jsx';

export default React.createClass({

    handleChange(field, e) {
        this.props.data.updateField( {
            key : field,
            value : e.target.value
        });
    },
    handleDateChange(date) {
        this.props.data.q_dob = date;
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
                <IdentityFields {...this.props} focusElement={this.props.focusElement} />

                <DateField
                    errorFields={this.props.errorFields}
                    bsStyle={this.handleValidationState("q_dob") }
                    label="Date of birth (mm/yy/dddd)"
                    value={this.props.data.q_dob}
                    required={true}
                    fieldName="q_dob"
                    onChange={this.handleDateChange}
                />

                <ValidatedInput errorFields={this.props.errorFields}
                                bsStyle={this.handleValidationState("q_email") }
                                label="Email address" type="text"
                                value={this.props.data.q_email}
                                required={true}
                                fieldName="q_email"
                                onChange={this.handleChange.bind(this, "q_email")}/>

                <ValidatedInput errorFields={this.props.errorFields}
                                bsStyle={this.handleValidationState("q_password") }
                                label="Password" type="password"
                                value={this.props.data.q_password}
                                required={true}
                                fieldName="q_password"
                                onChange={this.handleChange.bind(this, "q_password")}/>
            </div>
        );
    }
});