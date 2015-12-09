import React from 'react';

import MultiselectField from './multiselect-field.jsx';

export default class VolunteerAreaField extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    getOptions() {
      if (this.props.formLists) {
        return this.props.formLists[this.props.fieldName.replace('data.q_', '')];
      } else {
        return [];
      }
    }


    render() {
        return(
            <MultiselectField {...this.props}>
            </MultiselectField>
        );
    }
}
