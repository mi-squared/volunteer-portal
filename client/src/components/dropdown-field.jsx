import React from 'react';

import classNames from 'classnames'

export default React.createClass({

    commitChange: function(e) {
        if ( this.props.onChange ) {
            this.props.onChange(this.props.fieldName, e);
        }
    },

    getOptions: function () {
      if (this.props.formLists) {
        return this.props.formLists[this.props.fieldName.replace('data.q_', '').replace('session.', '')];
      } else {
        return [];
      }
    },

    render: function() {
        var requiredLabel = this.props.required ? <span className='j-required'>*</span> : '';
        var message;
        var fieldClassName = "form-control";
        if (this.props.errorFields) {
            var errorField = this.props.errorFields[this.props.fieldName];
            if ( errorField ) {
                message = errorField['message'];
                fieldClassName += " error";
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
                        className={fieldClassName}
                        value={this.props.selectValue}
                        ref={this.props.ref}
                        fieldName={this.props.fieldName}
                        onChange={this.commitChange}
                        id={this.props.id ? this.props.id : this.props.fieldName.replace('data.q_', '').replace('session.', '')}
                        placeholder={this.props.placeHolder}>
                        {this.getOptions().map(entry =>
                            <option key={entry.value} value={entry.value}>{entry.name}</option>
                        )}
                    </select>
                </div>
            </div>
        );
    }
});
