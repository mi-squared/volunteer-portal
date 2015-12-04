import React from 'react';

import Input from 'react-bootstrap/lib/Input';
import QuestionContainer from './question-container.jsx';

export default React.createClass({

    commitChange: function(e) {
        if ( this.props.onChange ) {
            this.props.onChange(this.props.fieldName, e);

            var clearIf = this.props.clearIf;
            if ( !clearIf ) {
                return;
            }

            if ( clearIf.isNot ) {
                for ( var i = 0; i < clearIf.fields.length; i++ ) {
                    var field = clearIf.fields[i];
                    if ( this.props.data[field] !== clearIf.isNot ) {
                        this.props.onChange(field, "");
                    }
                }
            }
        }
    },

    render: function() {
      let groomedId = this.props.fieldName.replace('data.q_', "")
        return (
            <div  className="form-group">
                <label className="control-label">
                    {this.props.label}
                </label>

                <div>
                    <label className="radio-inline">
                        <input onChange={this.commitChange}
                            checked={this.props.value === "true"}
                            type="radio"
                            name={this.props.fieldName}
                            ref={this.props.fieldName}
                            value="true"
                            id={groomedId + "_yes"}
                            />
                          Yes
                    </label>
                    <label className="radio-inline">
                        <input onChange={this.commitChange}
                            checked={this.props.value !== "true"}
                            type="radio"
                            name={this.props.fieldName}
                            ref={this.props.fieldName}
                            value="false"
                            id={groomedId + "_no"}
                             />
                          No
                    </label>
                </div>
            </div>
        );
    }
});
