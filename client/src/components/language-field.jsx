import React from 'react';

import Input from 'react-bootstrap/lib/Input';
import MultiselectField from '../components/multiselect-field.jsx';

export default React.createClass({

    getFieldName() {
        return this.props.fieldName.split(".")[1];
    },

    render: function() {
        return(
            <MultiselectField
                {...this.props}
                value={this.props.data[this.getFieldName()]}
                placeHolder="Click to choose languages">

            </MultiselectField>
        );
    }
});
