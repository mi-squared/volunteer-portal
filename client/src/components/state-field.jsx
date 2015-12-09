import React from 'react';

import Input from 'react-bootstrap/lib/Input';
import DropdownField from './dropdown-field.jsx';

export default React.createClass({

    getFieldName() {
        return this.props.fieldName.split(".")[1];
    },

    render: function() {
        return(
            <DropdownField {...this.props}
                required={this.props.required}
                label={this.props.label}
                selectValue={this.props.data[this.getFieldName()]}
                fieldName={this.props.fieldName}
                ref={this.props.ref}
                onChange={this.props.onChange}>
            </DropdownField>
        );
    }
});
