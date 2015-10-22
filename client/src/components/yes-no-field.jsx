import React from 'react';

import Input from 'react-bootstrap/lib/Input';
import QuestionContainer from './question-container.jsx';

export default React.createClass({

    handleChange(field, e) {
        this.props.data.updateField( {
            key : field,
            value : e.target.value
        });
    },

    render: function() {
        return (
            <div  className="form-group">
                <label  className="control-label">
                    {this.props.label}
                </label>

                <div>
                    <label className="radio-inline">
                        <input onChange={this.handleChange.bind(this, this.props.fieldName)}
                            checked={this.props.data[this.props.fieldName] === "true"}
                            type="radio" name={this.props.fieldName} ref={this.props.fieldName} value="true">Yes</input>
                    </label>
                    <label className="radio-inline">
                        <input onChange={this.handleChange.bind(this, this.props.fieldName)}
                            checked={this.props.data[this.props.fieldName] !== "true"}
                            type="radio" name={this.props.fieldName} ref={this.props.fieldName} value="false">No</input>
                    </label>
                </div>
            </div>
        );
    }
});