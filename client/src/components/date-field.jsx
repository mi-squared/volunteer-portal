import React from 'react';

import DateTimeField from 'react-bootstrap-datetimepicker/lib/DateTimeField.js';
var classNames = require('classnames');

export default React.createClass({

    getInputDOMNode: function() {
        return $(this.getDOMNode()).find("input").get(0);
    },

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

    render: function() {
        const {date, format, mode, inputFormat} = this.state;

        var requiredLabel = this.props.required ? <span className='j-required'>*</span> : '';
        var message;
        if (this.props.errorFields) {
            var errorField = this.props.errorFields[this.props.fieldName];
            if ( errorField ) {
                message = errorField['message'];
            }
        }
        var errorMessage = message ? <span className='j-error-message'>{message}</span> : '';

        return(
            <div className={classNames('form-group', message ? 'has-error' : '')}>
                <label className="control-label">
                    <span>{requiredLabel}{this.props.label}</span>
                </label>
                {errorMessage}
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