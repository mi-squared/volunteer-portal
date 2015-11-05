import React from 'react';

import classNames from 'classnames'

export default React.createClass({
    getInputDOMNode: function() {
        return $(this.getDOMNode()).find("input").get(0);
    },

    handleChange: function(e) {
        this.dirty = true;
        this.setState({ value: e.target.value });
    },

    commitChange: function(e) {
        if ( this.props.onChange ) {
            this.props.onChange(this.props.fieldName, e);
        }
        this.dirty = false;
    },

    componentWillMount: function() {
        this.setState({ value: this.props.value });
    },

    componentDidMount: function() {
        if ( this.props.focusElement === this.props.fieldName ) {
            this.getInputDOMNode().focus();
        }
    },

    getValue: function() {
        return this.dirty ? this.state.value : this.props.value;
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

        var text =
            <input label={this.props.label}
               type={this.props.type}
               className="form-control"
               value={this.getValue()}
               onChange={this.handleChange}
               ref={this.props.ref}
               onBlur={this.commitChange}
               placeholder={this.props.placeholder}
            />;

        var textArea =
            <textarea label={this.props.label}
                   className="form-control"
                   onChange={this.handleChange}
                   ref={this.props.ref}
                   onBlur={this.commitChange}
            >{this.getValue()}</textarea>;

        var toShow = this.props.type == 'textarea' ? textArea : text;

        return(
            <div className={classNames('form-group', message ? 'has-error' : '')}>
                <label className="control-label">
                    <span>{requiredLabel}{this.props.label}</span>
                </label>
                {errorMessage}
                {toShow}
            </div>
        );
    }
});

