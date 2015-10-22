import React from 'react';

import Input from 'react-bootstrap/lib/Input';

export default class ValidatedInput extends Input {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if ( super.componentDidMount) {
            super.componentDidMount();
        }
        if (this.props.required) {
            if ( !this.parent ) {
                this.parent = $(this.getInputDOMNode()).parent();
            }
            var label = this.parent.find("label span");
            if (this.parent.find("span.j-required").length < 1) {
                var requiredDOM = $("<span class='j-required'>*</span>");
                label.prepend(requiredDOM);
            }

            validate.call(this, this.props);
        }

    }

    componentWillReceiveProps(nextProps) {
        if (super.componentWillReceiveProps) {
            super.componentWillReceiveProps(nextProps);
        }
        validate.call(this, nextProps);
    }
}

function validate(nextProps) {
    if (!this.props.required) {
        return;
    }

    if ( !this.parent ) {
        this.parent = $(this.getInputDOMNode()).parent();
    }

    // apply label
    var state;
    var self = this;
    if (nextProps && nextProps.errorFields && nextProps.errorFields.length > 0) {
        nextProps.errorFields.map(entry => {
            if (entry.field === self.props.fieldName && !state) {
                state = entry.message;
            }
        });
    }

    var errorMessageExists = this.parent.find("label span.j-error-message").length > 0;
    if (state && !errorMessageExists) {
        var errorMessage = "<span class='j-error-message'>" + state + "</span>";
        this.parent.find("label").append(errorMessage);
        this.parent.addClass("has-error");
    } else if (!state && errorMessageExists) {
        this.parent.find("label span.j-error-message").remove();
        this.parent.removeClass("has-error");
    } else if (errorMessageExists) {
        $(this.parent.find("label span.j-error-message")).html(state);
        this.parent.addClass("has-error");
    }
}
