import React from 'react';
import ReactAddons from 'react/addons';
import Input from 'react-bootstrap/lib/Input';

import QuestionContainer from '../components/question-container.jsx';
import ValidatedInput from '../components/validated-input-field.jsx';
import StateField from '../components/state-field.jsx';
import BaseSection from './base-section.jsx'

export default class LicenseFields extends BaseSection {

    render () {
        return (
            <div>

                <hr/>

                <StateField
                    {...this.props}
                    label="State of license"
                    ref="data.q_licensed_state"
                    fieldName="data.q_licensed_state"
                    onChange={this.handleChange}
                />

                <ValidatedInput
                    {...this.props}
                    label="Discipline licensed in"
                    value={this.props.data.q_licensed_discipline}
                    fieldName="data.q_licensed_discipline"
                    ref="data.q_licensed_discipline"
                    onChange={this.handleChange}/>

                <ValidatedInput
                    {...this.props}
                    label="Expiration date of license (mm/yy/dddd)"
                    value={this.props.data.q_license_expiration}
                    fieldName="data.q_license_expiration"
                    ref="data.q_license_expiration"
                    onChange={this.handleChange}/>

                <hr/>

            </div>
        );
    }
}