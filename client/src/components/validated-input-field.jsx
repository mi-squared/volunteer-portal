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

        var that = this;
        if ( this.props.mask ) {
            $(this.getInputDOMNode()).mask(this.props.mask);
        }
        $(this.getInputDOMNode()).blur( function(e) {
            that.commitChange(e);
        });
    },

    getValue: function() {
        return this.dirty ? this.state.value : this.props.value;
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

        var text =
            <input label={this.props.label}
               type={this.props.type}
               className={fieldClassName}
               value={this.getValue()}
               onChange={this.handleChange}
               ref={this.props.ref}
               placeholder={this.props.placeholder}
            />;

        var textArea =
            <textarea label={this.props.label}
                   className={fieldClassName}
                   onChange={this.handleChange}
                   ref={this.props.ref}
                   onBlur={this.commitChange}
            >{this.getValue()}</textarea>;

        var toShow = this.props.type == 'textarea' ? textArea : text;

        var label = <label className="control-label">
            <span>{requiredLabel}{this.props.label}</span>
        </label>;

        return(
            <div className={classNames('form-group', message ? 'has-error' : '')}>
                {this.props.label ? label : ''}
                {errorMessage}
                {toShow}
            </div>
        );
    }
});

