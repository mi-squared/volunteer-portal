import React from 'react';

import Input from 'react-bootstrap/lib/Input';

import ValidatedInput from '../components/validated-input-field.jsx';
import StateField from '../components/state-field.jsx';
import CountryField from '../components/country-field.jsx';
import BaseSection from './base-section.jsx'

export default class ContactFields extends BaseSection {

    render() {
        return (
            <div>
                <div className="form-group">
                    <ValidatedInput {...this.props}
                        required={true}
                        label="Address 1"
                        ref="data.q_address_1"
                        fieldName="data.q_address_1"
                        value={this.props.data.q_address_1}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <ValidatedInput {...this.props}
                        label="Address 2"
                        type="text"
                        ref="data.q_address_2"
                        fieldName="data.q_address_2"
                        value={this.props.data.q_address_2}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <ValidatedInput {...this.props}
                            required={true}
                            label="City"
                            ref="data.q_address_city"
                            fieldName="data.q_address_city"
                            value={this.props.data.q_address_city}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <StateField {...this.props}
                                required={true}
                                label="State/Province"
                                ref="data.q_address_state"
                                fieldName="data.q_address_state"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <ValidatedInput {...this.props}
                            required={true}
                            label="Zip"
                            ref="data.q_address_zip"
                            fieldName="data.q_address_zip"
                            value={this.props.data.q_address_zip}
                            onChange={this.handleChange}
                        />

                    </div>
                </div>
                <div className="form-group">
                    <CountryField {...this.props}
                        required={true}
                        label="Country"
                        ref="data.q_address_country"
                        fieldName="data.q_address_country"
                        onChange={this.handleChange}
                    />
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <ValidatedInput {...this.props}
                                label="Email address"
                                value={this.props.data.q_email}
                                required={true}
                                ref="data.q_email"
                                fieldName="data.q_email"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <ValidatedInput {...this.props}
                                label="Mobile phone"
                                value={this.props.data.q_phone_mobile}
                                ref="data.q_phone_mobile"
                                fieldName="data.q_phone_mobile"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <ValidatedInput {...this.props}
                                label="Home phone"
                                value={this.props.data.q_phone_home}
                                ref="data.q_phone_home"
                                fieldName="data.q_phone_home"
                                onChange={this.handleChange}
                                />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}