import React from 'react';
import ReactAddons from 'react/addons';
import Input from 'react-bootstrap/lib/Input';

import QuestionContainer from '../components/question-container.jsx';
import ValidatedInput from '../components/validated-input-field.jsx';
import StateField from '../components/state-field.jsx';
import BaseSection from './base-section.jsx'
import DropdownField from '../components/dropdown-field.jsx';

export default class LicenseFields extends BaseSection {

    render () {
        return (
            <div >
                <div>
                    <hr/>
                </div>

                <DropdownField {...this.props}
                    selectValue={this.props.data['q_licensed_discipline']}
                    label="Professional license or certification in:"
                    fieldName="data.q_licensed_discipline"
                    ref="data.q_licensed_discipline"
                    onChange={this.handleChange}
                    required={true}>
                </DropdownField>

                <QuestionContainer {...this.props}
                    criteria={ {key : 'q_licensed_discipline', value : "other" } }>
                    <ValidatedInput {...this.props}
                        label=""
                        value={this.props.data.q_licensed_discipline_other}
                        fieldName="data.q_licensed_discipline_other"
                        ref="data.q_licensed_discipline_other"
                        onChange={this.handleChange}
                        required={true}
                    />
                </QuestionContainer>

                <div className="row">
                    <div className="col-md-3">
                        <StateField
                            {...this.props}
                            label="State of license"
                            ref="data.q_licensed_state"
                            fieldName="data.q_licensed_state"
                            onChange={this.handleChange}
                            required={true}
                        />

                        <QuestionContainer {...this.props}
                            criteria={ {key : 'q_licensed_state', value : "Other" } }
                            >
                            <ValidatedInput {...this.props}
                                label=""
                                value={this.props.data.q_licensed_state_other}
                                fieldName="data.q_licensed_state_other"
                                ref="data.q_licensed_state_other"
                                onChange={this.handleChange}
                            />
                        </QuestionContainer>
                    </div>
                    <div className="col-md-9">
                        <ValidatedInput
                            {...this.props}
                            label="Expiration date of license"
                            value={this.props.data.q_licensed_expiration_date}
                            fieldName="data.q_licensed_expiration_date"
                            ref="data.q_licensed_expiration_date"
                            placeholder="mm/dd/yyyy"
                            mask="99/99/9999"
                            onChange={this.handleChange}
                            required={true}
                            />
                    </div>

                </div>

                <ValidatedInput
                    {...this.props}
                    label="License number"
                    value={this.props.data.q_licensed_number}
                    fieldName="data.q_licensed_number"
                    ref="data.q_licensed_number"
                    onChange={this.handleChange}
                    required={true}
                />


                <div>
                    <hr/>
                </div>
            </div>
        );
    }
}
