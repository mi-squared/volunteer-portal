import React from 'react';

import Input from 'react-bootstrap/lib/Input';
import DropdownButton from 'react-bootstrap/lib/DropdownButton.js';
import MenuItem from 'react-bootstrap/lib/MenuItem.js';

import QuestionContainer from '../components/question-container.jsx';
import DropdownField from '../components/dropdown-field.jsx';

import ContactFields from './contact-fields.jsx';
import IdentityFields from './identity-fields.jsx';

export default React.createClass({

    handleChange(field, e) {
        var thisChild = this.getChild();
        thisChild[field] = e.target.value;
        this.props.data.updateChild(thisChild);
    },

    getChild() {
        return this.props.data['children'][this.props.childID];
    },

    render: function() {
        return (
            <QuestionContainer data={ this.props.data }>
                <div>
                    <IdentityFields data={this.getChild()} onChange={this.handleChange} focusElement="f_first_name"/>
                </div>

                <div>
                    <DropdownField
                        label="Child's age"
                        selectValue={this.getChild()['q_child_age']}
                        data={this.props.data}
                        onChange={this.handleChange.bind(this, "q_child_age")}>
                        <Option value="0-23mos">0-23mos</Option>
                        <Option value="2-4">2-4</Option>
                        <Option value="5-6">5-6</Option>
                        <Option value="7-9">7-9</Option>
                        <Option value="10-12">10-12</Option>
                    </DropdownField>
                </div>

                <div>
                    <DropdownField
                        label="Shirt size"
                        selectValue={this.getChild()['q_child_tshirt']}
                        data={this.props.data}
                        onChange={this.handleChange.bind(this, "q_child_tshirt")}>
                        <Option value="xsm">Extra small</Option>
                        <Option value="sm">Small</Option>
                        <Option value="med">Medium</Option>
                        <Option value="lrg">Large</Option>
                        <Option value="xlrg">Extra large</Option>
                    </DropdownField>
                </div>

                <QuestionContainer>
                    <Input label="Grade" type="text"
                        onChange={this.handleChange.bind(this, "q_child_grade")}/>
                </QuestionContainer>

                <QuestionContainer>
                    <Input label="Allergies (food or medicines)" type="text"
                        onChange={this.handleChange.bind(this, "q_child_allergies_medicines")}/>
                </QuestionContainer>

                <QuestionContainer>
                    <Input label="Medications" type="text"
                        onChange={this.handleChange.bind(this, "q_child_medications")}/>
                </QuestionContainer>

                <QuestionContainer>
                    <Input label="Medical problems" type="text"
                        onChange={this.handleChange.bind(this, "q_child_medical_problems")}/>
                </QuestionContainer>

                <hr/>

            </QuestionContainer>
        );
    }
});