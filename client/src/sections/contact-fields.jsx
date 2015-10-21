import React from 'react';

import Input from 'react-bootstrap/lib/Input';

import ValidatedInput from '../components/validated-input-field.jsx';
import StateField from '../components/state-field.jsx';

export default React.createClass({

    handleChange(field, e) {
        this.props.data.updateField( {
            key : field,
            value : e.target.value
        });
    },

    handleValidationState: function(field, e) {
        var isError = this.props.errorFields
            && this.props.errorFields.indexOf(field) > -1;

        if ( isError ) {
            return "error";
        }
    },

    render: function() {
        var self = this;
        return (
            <div>
                <div>
                    <Input
                        label="Address 1"
                        type="text"
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
                    <Input
                        label="City"
                        type="text"
                        value={this.props.data.q_address_city}
                        onChange={this.handleChange.bind(this, "q_address_city")}
                    />
                </div>

                <div>
                    <StateField
                        data={this.props.data}
                        label="State/Province"
                        fieldName="q_address_state"
                        onChange={this.handleChange.bind(this, "q_address_state")}
                    />
                </div>

                <div>
                    <Input
                        label="Zip"
                        type="text"
                        value={this.props.data.q_address_zip}
                        onChange={this.handleChange.bind(this, "q_address_zip")}
                    />
                </div>

                <div>
                    <Input
                        label="Country"
                        type="text"
                        value={this.props.data.q_address_country}
                        onChange={this.handleChange.bind(this, "q_address_country")}
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