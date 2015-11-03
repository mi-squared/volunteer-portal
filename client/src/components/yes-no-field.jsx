import React from 'react';

import Input from 'react-bootstrap/lib/Input';
import QuestionContainer from './question-container.jsx';

export default React.createClass({

    commitChange: function(e) {
        if ( this.props.onChange ) {
            this.props.onChange(this.props.fieldName, e);
        }
    },

    render: function() {
        return (
            <div  className="form-group">
                <label className="control-label">
                    {this.props.label}
                </label>

                <div>
                    <label className="radio-inline">
                        <input onChange={this.commitChange}
                            checked={this.props.value === "true"}
                            type="radio" name={this.props.fieldName} ref={this.props.fieldName} value="true">Yes</input>
                    </label>
                    <label className="radio-inline">
                        <input onChange={this.commitChange}
                            checked={this.props.value !== "true"}
                            type="radio" name={this.props.fieldName} ref={this.props.fieldName} value="false">No</input>
                    </label>
                </div>
            </div>
        );
    }
});