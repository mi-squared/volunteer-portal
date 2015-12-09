import React from 'react';

import Input from 'react-bootstrap/lib/Input';
import MultiselectField from '../components/multiselect-field.jsx';

export default React.createClass({

    getFieldName() {
        return this.props.fieldName.split(".")[1];
    },

    getOptions: function () {
      if (this.props.formLists) {
        return this.props.formLists[this.props.fieldName.replace('data.q_', '')];
      } else {
        return [];
      }
    },

    render: function() {
        return(
            <MultiselectField
                {...this.props}
                value={this.props.data[this.getFieldName()]}
                placeHolder="Click to choose languages">
                {this.getOptions().map(option =>
                    <option key={option.value} value={option.value}>{option.name}</option>
                )}
            </MultiselectField>
        );
    }
});
