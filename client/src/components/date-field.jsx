import React from 'react';

import DateTimeField from 'react-bootstrap-datetimepicker/lib/DateTimeField.js';
var classNames = require('classnames');

export default React.createClass({

    getInitialState: function() {
        return {
            date: "1970-01-01",
            format: "YYYY-MM-DD",
            inputFormat: "MM/DD/YYYY",
            mode: "year"
        };
    },

    handleChange: function(newDate) {
        return this.setState({date: newDate});
    },

    componentWillReceiveProps(nextProps) {
        if (super.componentWillReceiveProps) {
            super.componentWillReceiveProps(nextProps);
        }

        if ( this.props.required ) {
            var parent = $(this.getDOMNode());
            var label = parent.find("label span");
            var requiredDOM = $("<span class='j-required'>*</span>");

            if ( parent.find("span.j-required").length < 1 ) {
                label.prepend(requiredDOM);
            }

            // apply label
            var state;
            var self = this;
            if ( nextProps.errorFields ) {
                nextProps.errorFields.map(entry => {
                    if ( entry.field === self.props.fieldName && !state ) {
                        state = entry.message
                    }
                });
            }

            var errorMessage;
            var errorMessageExists = parent.find("label span.j-error-message").length > 0;
            if ( state && !errorMessageExists ) {
                errorMessage = "<span class='j-error-message'>" + state + "</span>";
                parent.find("label").append(errorMessage);
            } else if (!state && errorMessageExists ){
                parent.find("label span.j-error-message").remove();
            } else if (errorMessageExists ){
                $(parent.find("label span.j-error-message")).html(state);
            }
        }
    },

    render: function() {
        const {date, format, mode, inputFormat} = this.state;
        var classes = classNames('form-group', this.props.bsStyle == 'error' ? 'has-error' : '' );

        return(
            <div className={classes}>
                <label className="control-label">
                    <span>{this.props.label}</span>
                </label>
                <DateTimeField
                    dateTime={this.props.value}
                    format={format}
                    viewMode={mode}
                    inputFormat={inputFormat}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
});