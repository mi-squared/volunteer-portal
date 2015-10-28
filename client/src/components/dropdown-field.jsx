import React from 'react';

export default React.createClass({

    handleChange(field, e) {
        if ( this.props.onChange ) {
            this.props.onChange(field, e);
        } else if ( this.props.data.updateField ){
            this.props.data.updateField( {
                key : field,
                value : $(React.findDOMNode(this)).val()
            });
        }
    },

    componentDidMount() {
        if ( this.props.multiple ) {
            var targetField = $(React.findDOMNode(this));
            targetField.select2();

            var self = this;
            targetField.on("select2:select", function (e) {
                self.handleChange( self.props.field, e );
            });
        }
    },

    XcomponentWillReceiveProps: function(nextProps) {
        if ( this.props.required ) {
            var parent = $(this.getDOMNode());

            var label = parent.find("label span");
            if ( parent.find("span.j-required").length < 1 ) {
                var requiredDOM = $("<span class='j-required'>*</span>");
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
                parent.addClass("has-error");
            } else if (!state && errorMessageExists ){
                parent.find("label span.j-error-message").remove();
                parent.removeClass("has-error");
            } else if (errorMessageExists ){
                $(parent.find("label span.j-error-message")).html(state);
            }
        }
    },

    getOptions() {
        return this.props.options || [];
    },

    render: function() {
        return (
            <div className="form-group">
                <label className="control-label">
                    <span>{this.props.label}</span>
                </label>
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