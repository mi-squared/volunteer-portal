import React from 'react';

import Input from 'react-bootstrap/lib/Input';
import DropdownButton from 'react-bootstrap/lib/DropdownButton.js';
import MenuItem from 'react-bootstrap/lib/MenuItem.js';

import ValidatedInput from '../components/validated-input-field.jsx';
import QuestionContainer from '../components/question-container.jsx';
import DropdownField from '../components/dropdown-field.jsx';
import ContactFields from './contact-fields.jsx';
import IdentityFields from './identity-fields.jsx';
import BaseSection from './base-section.jsx'

export default class ChildFields extends BaseSection {

  constructor(props) {
      super(props);

      this.getChild = this.getChild.bind(this);
      this.getChildValue = this.getChildValue.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }


    handleChange(field, e) {
        var thisChild = this.getChild();
        var childField = field.split(".")[1];
        thisChild[childField] = e.target.value;
        this.props.updateChild(thisChild);
    }

    getChild() {
        var data = this.props.data['children'];
        if ( !data ) {
            return {};
        }
        return data[this.props.childID] || {};
    }

    getChildValue(key) {
        var child = this.getChild();
        if ( !child ) {
            return;
        }

        return child[key];
    }

    render() {
        return (
            <div className="col-md-12">
                <IdentityFields
                    data={this.getChild()}
                    onChange={this.handleChange}
                    focusElement="data.q_first_name"
                />

                <div className="row">
                    <div className="col-md-5">
                        <DropdownField
                            {...this.props}
                            selectValue={this.getChild()['q_child_age']}
                            label="Age"
                            fieldName="data.q_child_age"
                            ref="data.q_child_age"
                            onChange={this.handleChange}>

                        </DropdownField>
                    </div>
                    <div className="col-md-3">
                        <DropdownField {...this.props}
                            selectValue={this.getChild()['q_tshirt']}
                            label="Shirt size"
                            fieldName="data.q_tshirt"
                            ref="data.q_tshirt"
                            onChange={this.handleChange}>
                        </DropdownField>

                    </div>
                    <div className="col-md-4">
                        <ValidatedInput {...this.props}
                            label="Grade"
                            type="text"
                            fieldName="data.q_child_grade"
                            ref="data.q_child_grade"
                            value={this.getChildValue("q_child_grade")}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <ValidatedInput
                    {...this.props}
                    type="textarea"
                    label="Allergies"
                    value={this.getChildValue("q_child_allergies_medicines")}
                    fieldName="data.q_child_allergies_medicines"
                    ref="data.q_child_allergies_medicines"
                    onChange={this.handleChange}
                />

                <ValidatedInput
                    {...this.props}
                    type="textarea"
                    label="Medications"
                    value={this.getChildValue("q_child_medications")}
                    fieldName="data.q_child_medications"
                    ref="data.q_child_medications"
                    onChange={this.handleChange}
                />

                <ValidatedInput
                    {...this.props}
                    type="textarea"
                    label="Medical problems"
                    value={this.getChildValue("q_child_medical_problems")}
                    fieldName="data.q_child_medical_problems"
                    ref="data.q_child_medical_problems"
                    onChange={this.handleChange}
                />

                <div>
                    <hr/>
                </div>

            </div>
        );
    }
}
