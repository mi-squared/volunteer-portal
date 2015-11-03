import React from 'react';

import classNames from 'classnames'

export default React.createClass({

    getValue: function() {
        return this.props.value ? this.props.value.split(","): []
    },

    commitChange: function(e) {
        if ( this.props.onChange ) {
            this.props.onChange(this.props.fieldName, $(e.target).val().join(","));
        }
    },

    componentDidMount: function() {
        var targetField = $(React.findDOMNode(this)).find("select");
        targetField.select2(
            { placeholder : this.props.placeHolder }
        );

        var self = this;
        targetField.on("select2:select", function (e) {
            self.commitChange(e);
        });
    },

    render: function() {
        var requiredLabel = this.props.required ? <span className='j-required'>*</span> : '';
        var message;
        if (this.props.errorFields) {
            var errorField = this.props.errorFields[this.props.fieldName];
            if ( errorField ) {
                message = errorField['message'];
            }
        }
        var errorMessage = message ? <span className='j-error-message'>{message}</span> : '';

        return (
            <div className={classNames('form-group', message ? 'has-error' : '')}>
                <label className="control-label">
                    <span>{requiredLabel}{this.props.label}</span>
                </label>
                {errorMessage}
                <div>
                    <select
                        multiple="true"
                        className="form-control"
                        ref={this.props.ref}
                        value={this.getValue()}
                        fieldName={this.props.fieldName}
                        style={{width: "100%"}}>>
                        {this.props.children.map(entry =>
                            <option key={entry.props.value || entry.props.children} value={entry.props.value || entry.props.children}>{entry.props.children}</option>
                        )}
                    </select>
                </div>
            </div>
        );
    }
});