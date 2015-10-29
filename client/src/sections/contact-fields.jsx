import React from 'react';

import Input from 'react-bootstrap/lib/Input';

import ValidatedInput from '../components/validated-input-field.jsx';
import StateField from '../components/state-field.jsx';
import CountryField from '../components/country-field.jsx';
import BaseSection from './base-section.jsx'

export default class ContactFields extends BaseSection {
    constructor(props) {
        super(props);
        this.handleChange = super.handleChange.bind(this);
    }

    render() {
        return (
            <div>
                <div>
                    <ValidatedInput
                        focusElement={this.props.focusElement}
                        onBlur={this.props.onBlur}
                        errorFields={this.props.errorFields}
                        required={true}
                        label="Address 1" type="text"
                        ref="q_address_1"
                        fieldName="q_address_1"
                        value={this.props.data.q_address_1}
                        onChange={this.handleChange}
                    />
                </div>

                <div>
                    <ValidatedInput
                        label="Address 2"
                        type="text"
                        ref="q_address_2"
                        fieldName="q_address_2"
                        value={this.props.data.q_address_2}
                        onChange={this.handleChange}
                    />
                </div>

                <div>
                    <ValidatedInput
                        focusElement={this.props.focusElement}
                        onBlur={this.props.onBlur}
                        errorFields={this.props.errorFields}
                        required={true}
                        label="City" type="text"
                        ref="q_address_city"
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
                        ref="q_address_state"
                        fieldName="q_address_state"
                        onChange={this.handleChange.bind(this, "q_address_state")}
                    />
                </div>

                <div>
                    <ValidatedInput
                        focusElement={this.props.focusElement}
                        onBlur={this.props.onBlur}
                        errorFields={this.props.errorFields}
                        required={true}
                        label="Zip" type="text"
                        ref="q_address_zip"
                        fieldName="q_address_zip"
                        value={this.props.data.q_address_zip}
                        onChange={this.handleChange}
                    />
                </div>

                <div>
                    <CountryField
                        data={this.props.data}
                        required={true}
                        label="Country"
                        ref="q_address_country"
                        fieldName="q_address_country"
                        onChange={this.handleChange}
                    />
                </div>

                <div>
                    <Input
                        label="Mobile phone"
                        type="text"
                        value={this.props.data.q_phone_mobile}
                        ref="q_phone_mobile"
                        onChange={this.handleChange.bind(this, "q_phone_mobile")}
                    />
                </div>

                <div>
                    <Input
                        label="Home phone"
                        type="text"
                        value={this.props.data.q_phone_home}
                        ref="q_phone_home"
                        onChange={this.handleChange.bind(this, "q_phone_home")}
                    />
                </div>

                <div>
                    <ValidatedInput
                        focusElement={this.props.focusElement}
                        onBlur={this.props.onBlur}
                        errorFields={this.props.errorFields}
                        label="Email address" type="text" value={this.props.data.q_email}
                        required={true}
                        ref="q_email"
                        fieldName="q_email"
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}