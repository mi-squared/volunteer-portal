import React from 'react';

import Input from 'react-bootstrap/lib/Input';
import classNames from 'classnames'

export default React.createClass({
    getInputDOMNode: function() {
        return $(this.getDOMNode()).find("input").get(0);
    },

    componentDidMount: function() {
        if ( this.props.focusElement === this.props.fieldName ) {
            this.getInputDOMNode().focus();
        }
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

        return(
            <div className={classNames('form-group', message ? 'has-error' : '')}>
                <label className="control-label">
                    <span>{requiredLabel}{this.props.label}</span>
                </label>
                {errorMessage}
                <input label={this.props.label}
                    type={this.props.type}
                    className="form-control"
                    value={this.props.value}
                    onChange={this.props.onChange}
                    ref={this.props.ref}
                    onBlur={this.props.onBlur}
                />
            </div>
        );
    }
});

