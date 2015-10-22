import React from 'react';

import Input from 'react-bootstrap/lib/Input';

import ValidatedInput from '../components/validated-input-field.jsx';
import StateField from '../components/state-field.jsx';
import CountryField from '../components/country-field.jsx';

export default React.createClass({

    // todo - common to all sections - make into a mixin
    handleChange(field, e) {
        this.props.data.updateField( {
            key : field,
            value : e.target.value
        });
    },

    // todo - common to all sections - make into a mixin
    componentDidMount() {
        if ( this.props.focusElement ) {
            var ref = this.refs[this.props.focusElement];
            if ( ref ) {
                ref.getInputDOMNode().focus();
            }
        }
    },

    render: function() {
        var self = this;
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
                        onChange={this.handleChange.bind(this, "q_address_1")}
                    />
                </div>

                <div>
                    <Input
                        label="Address 2"
                        type="text"
                        ref="q_address_2"
                        value={this.props.data.q_address_2}
                        onChange={this.handleChange.bind(this, "q_address_2")}
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
                        onChange={this.handleChange.bind(this, "q_address_zip")}
                    />
                </div>

                <div>
                    <CountryField
                        data={this.props.data}
                        required={true}
                        label="Country"
                        ref="q_address_country"
                        fieldName="q_address_country"
                        onChange={this.handleChange.bind(this, "q_address_country")}
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
                        onChange={this.handleChange.bind(this, "q_email")}/>
                </div>
            </div>
        );
    }
});