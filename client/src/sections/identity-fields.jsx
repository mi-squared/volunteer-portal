import React from 'react';

import ValidatedInput from '../components/validated-input-field.jsx';
import BaseSection from './base-section.jsx'

export default class IdentityFields extends BaseSection {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-5">
                        <ValidatedInput {...this.props}
                            required={true}
                            label="First name"
                            type="text"
                            fieldName="data.q_first_name"
                            ref="data.q_first_name"
                            value={this.props.data.q_first_name}
                            onChange={this.props.onChange || this.handleChange}
                        />
                    </div>
                    <div className="col-md-3">
                        <ValidatedInput {...this.props}
                            label="Middle name" type="text"
                            fieldName="data.q_middle_name"
                            ref="data.q_middle_name"
                            value={this.props.data.q_middle_name}
                            onChange={this.props.onChange || this.handleChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <ValidatedInput {...this.props}
                            required={true}
                            label="Last name"
                            type="text"
                            fieldName="data.q_last_name"
                            ref="data.q_last_name"
                            value={this.props.data.q_last_name}
                            onChange={this.props.onChange || this.handleChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}