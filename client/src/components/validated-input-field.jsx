import React from 'react';

import Input from 'react-bootstrap/lib/Input';

export default class ValidatedInput extends Input {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (super.componentWillMount) {
            super.componentWillMount();
        }
    }

    componentWillUnmount() {
        if (super.componentWillUnmount) {
            super.componentWillUnmount();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (super.componentWillReceiveProps) {
            super.componentWillReceiveProps(nextProps);
        }

        if ( this.props.required ) {
            var parent = $(this.getInputDOMNode()).parent();
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
    }

    componentDidMount() {
        if ( super.componentDidMount) {
            super.componentDidMount();
        }
    }
}

