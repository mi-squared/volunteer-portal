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