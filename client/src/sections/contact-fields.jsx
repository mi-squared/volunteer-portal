import React from 'react';

import Input from 'react-bootstrap/lib/Input';

import ValidatedInput from '../components/validated-input-field.jsx';
import StateField from '../components/state-field.jsx';
import CountryField from '../components/country-field.jsx';

export default React.createClass({

    handleChange(field, e) {
        this.props.data.updateField( {
            key : field,
            value : e.target.value
        });
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
        var self = this;
        return (
            <div>
                <div>
                    <ValidatedInput
                        errorFields={this.props.errorFields}
                        required={true}
                        label="Address 1" type="text"
                        fieldName="q_address_1"
                        value={this.props.data.q_address_1}
                        onChange={this.handleChange.bind(this, "q_address_1")}
                    />
                </div>

                <div>
                    <Input
                        label="Address 2"
                        type="text"
                        value={this.props.data.q_address_2}
                        onChange={this.handleChange.bind(this, "q_address_2")}
                    />
                </div>

                <div>
                    <ValidatedInput
                        errorFields={this.props.errorFields}
                        required={true}
                        label="City" type="text"
                        fieldName="q_address_city"
                        value={this.props.data.q_address_city}
                        onChange={this.handleChange.bind(this, "q_address_city")}
                    />
                </div>

                <div>
                    <StateField
                        data={this.props.data}
                        required={true}
                        label="State/Province"
                        fieldName="q_address_state"
                        onChange={this.handleChange.bind(this, "q_address_state")}
                    />
                </div>

                <div>
                    <ValidatedInput
                        errorFields={this.props.errorFields}
                        required={true}
                        label="Zip" type="text"
                        fieldName="q_address_zip"
                        value={this.props.data.q_address_zip}
                        onChange={this.handleChange.bind(this, "q_address_zip")}
                    />
                </div>

                <div>
                    <CountryField
                        data={this.props.data}
                        required={true}
                        label="Country"
                        fieldName="q_address_state"
                        onChange={this.handleChange.bind(this, "q_address_state")}
                    />
                </div>

                <div>
                    <Input
                        label="Mobile phone"
                        type="text"
                        value={this.props.data.q_phone_mobile}
                        onChange={this.handleChange.bind(this, "q_phone_mobile")}
                    />
                </div>

                <div>
                    <Input
                        label="Home phone"
                        type="text"
                        value={this.props.data.q_phone_home}
                        onChange={this.handleChange.bind(this, "q_phone_home")}
                    />
                </div>

                <div>
                    <ValidatedInput
                        errorFields={this.props.errorFields}
                        bsStyle={this.handleValidationState("q_email") }
                        label="Email address" type="text" value={this.props.data.q_email}
                        required={true}
                        fieldName="q_email"
                        onChange={this.handleChange.bind(this, "q_email")}/>
                </div>
            </div>
        );
    }
});