import React from 'react';

import MultiselectField from './multiselect-field.jsx';

export default class VolunteerAreaField extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <MultiselectField {...this.props}>
            </MultiselectField>
        );
    }
}
