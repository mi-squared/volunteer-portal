import React from 'react';

import Input from 'react-bootstrap/lib/Input';
import DropdownField from './dropdown-field.jsx';

export default React.createClass({

    render: function() {
        return(
            <DropdownField
                required={this.props.required}
                label={this.props.label}
                selectValue={this.props.data[this.props.fieldName.replace('data.', '')] || "USA"}
                {...this.props}
                field={this.props.fieldName}
                ref={this.props.ref}
                onChange={this.props.onChange}>

            </DropdownField>
        );
    }
});
