import React from 'react';

import Input from 'react-bootstrap/lib/Input';

import IdentityFields from './identity-fields.jsx';

import ValidatedInput from '../components/validated-input-field.jsx';
import DateField from '../components/date-field.jsx';

export default React.createClass({

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

    handleChange(field, e) {
        this.props.data.updateField( {
            key : field,
            value : e.target.value
        });
    },

    handleDateChange(date) {
        this.props.data.updateField( {
            key : 'q_dob',
            value : date
        });
    },


    render: function() {
        return (
            <div>
                <IdentityFields {...this.props} />

                <DateField
                    focusElement={this.props.focusElement}
                    onBlur={this.props.onBlur}
                    errorFields={this.props.errorFields}
                    label="Date of birth (mm/yy/dddd)"
                    value={this.props.data.q_dob}
                    required={true}
                    fieldName="q_dob"
                    ref="q_dob"
                    onChange={this.handleDateChange}
                />

                <ValidatedInput focusElement={this.props.focusElement}
                                onBlur={this.props.onBlur}
                                errorFields={this.props.errorFields}
                                label="Email address" type="text"
                                value={this.props.data.q_email}
                                required={true}
                                fieldName="q_email"
                                ref="q_email"
                                onChange={this.handleChange.bind(this, "q_email")}/>

                <ValidatedInput focusElement={this.props.focusElement}
                                onBlur={this.props.onBlur}
                                errorFields={this.props.errorFields}
                                label="Password" type="password"
                                value={this.props.data.q_password}
                                required={true}
                                fieldName="q_password"
                                ref="q_password"
                                onChange={this.handleChange.bind(this, "q_password")}/>
            </div>
        );
    }
});