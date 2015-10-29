import React from 'react';

import classNames from 'classnames'

export default React.createClass({

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
                        className="form-control"
                        multiple={this.props.multiple}
                        value={this.props.selectValue}
                        ref="input"
                        onChange={this.handleChange}
                        placeholder={this.props.placeHolder}>
                    {this.props.children.map(entry =>
                            <option key={entry.props.value} value={entry.props.value}>{entry.props.children}</option>
                    )}
                    </select>
                </div>
            </div>
        );
    }
});