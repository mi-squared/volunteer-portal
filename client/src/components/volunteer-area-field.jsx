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
                <option value="Academy Bus Transportation">Academy Bus Transportation</option>
                <option value="Active Manual Relaxation/Hydrotherapy">Active Manual Relaxation/Hydrotherapy</option>
                <option value="Audio Visual">Audio Visual</option>
                <option value="Audio Visual Food Demonstration">Audio Visual Food Demonstration</option>
                <option value="Audiology">Audiology</option>
                <option value="Beautician/Barber Service">Beautician/Barber Service</option>
                <option value="Central Supply">Central Supply</option>
                <option value="Chaplaincy">Chaplaincy</option>
                <option value="Children’s Department Adult Volunteer">Children’s Department Adult Volunteer</option>
                <option value="Communications-Media">Communications-Media</option>
                <option value="Director’s/Assistant Director’s">Director’s/Assistant Director’s</option>
                <option value="Exit Management">Exit Management</option>
                <option value="Eye Care">Eye Care</option>
                <option value="Food Demonstration">Food Demonstration</option>
                <option value="Food Services">Food Services</option>
                <option value="Hospitality">Hospitality</option>
                <option value="Hospitality Decorations">Hospitality Decorations</option>
                <option value="Hospitality-Tour Guide">Hospitality-Tour Guide</option>
                <option value="Interpretation">Interpretation</option>
                <option value="Lab">Lab</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Mental Health">Mental Health</option>
                <option value="Music Therapy">Music Therapy</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Plant Services">Plant Services</option>
                <option value="Podiatry">Podiatry</option>
                <option value="Primary Care">Primary Care</option>
                <option value="Program Committee">Program Committee</option>
                <option value="PT/OT">PT/OT</option>
                <option value="Radiology">Radiology</option>
                <option value="Registration">Registration</option>
                <option value="Respiratory Therapy">Respiratory Therapy</option>
                <option value="Security">Security</option>
                <option value="Surgery">Surgery</option>
                <option value="Triage">Triage</option>
                <option value="Volunteer Registration">Volunteer Registration</option>
                <option value="Women’s Health">Women’s Health</option>
            </MultiselectField>
        );
    }
}
