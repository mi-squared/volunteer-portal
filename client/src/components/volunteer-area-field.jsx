import React from 'react';

import MultiselectField from './multiselect-field.jsx';

export default class VolunteerAreaField extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <MultiselectField {...this.props}>
                <option key="Academy Bus Transportation" value="Academy Bus Transportation">Academy Bus Transportation</option>
                <option key="Active Manual Relaxation/Hydrotherapy" value="Active Manual Relaxation/Hydrotherapy">Active Manual Relaxation/Hydrotherapy</option>
                <option key="Audio Visual" value="Audio Visual">Audio Visual</option>
                <option key="Audio Visual Food Demonstration" value="Audio Visual Food Demonstration">Audio Visual Food Demonstration</option>
                <option key="Audiology" value="Audiology">Audiology</option>
                <option key="Beautician/Barber Service" value="Beautician/Barber Service">Beautician/Barber Service</option>
                <option key="Central Supply" value="Central Supply">Central Supply</option>
                <option key="Chaplaincy" value="Chaplaincy">Chaplaincy</option>
                <option key="Children’s Department Adult Volunteer" value="Children’s Department Adult Volunteer">Children’s Department Adult Volunteer</option>
                <option key="Communications-Media" value="Communications-Media">Communications-Media</option>
                <option key="Director’s/Assistant Director’s" value="Director’s/Assistant Director’s">Director’s/Assistant Director’s</option>
                <option key="Exit Management" value="Exit Management">Exit Management</option>
                <option key="Eye Care" value="Eye Care">Eye Care</option>
                <option key="Food Demonstration" value="Food Demonstration">Food Demonstration</option>
                <option key="Food Services" value="Food Services">Food Services</option>
                <option key="Hospitality" value="Hospitality">Hospitality</option>
                <option key="Hospitality Decorations" value="Hospitality Decorations">Hospitality Decorations</option>
                <option key="Hospitality-Tour Guide" value="Hospitality-Tour Guide">Hospitality-Tour Guide</option>
                <option key="Interpretation" value="Interpretation">Interpretation</option>
                <option key="Lab" value="Lab">Lab</option>
                <option key="Lifestyle" value="Lifestyle">Lifestyle</option>
                <option key="Mental Health" value="Mental Health">Mental Health</option>
                <option key="Music Therapy" value="Music Therapy">Music Therapy</option>
                <option key="Pediatrics" value="Pediatrics">Pediatrics</option>
                <option key="Pharmacy" value="Pharmacy">Pharmacy</option>
                <option key="Plant Services" value="Plant Services">Plant Services</option>
                <option key="Podiatry" value="Podiatry">Podiatry</option>
                <option key="Primary Care" value="Primary Care">Primary Care</option>
                <option key="Program Committee" value="Program Committee">Program Committee</option>
                <option key="PT/OT" value="PT/OT">PT/OT</option>
                <option key="Radiology" value="Radiology">Radiology</option>
                <option key="Registration" value="Registration">Registration</option>
                <option key="Respiratory Therapy" value="Respiratory Therapy">Respiratory Therapy</option>
                <option key="Registration" value="Registration">Registration</option>
                <option key="Security" value="Security">Security</option>
                <option key="Surgery" value="Surgery">Surgery</option>
                <option key="Triage" value="Triage">Triage</option>
                <option key="Volunteer Registration" value="Volunteer Registration">Volunteer Registration</option>
                <option key="Women’s Health" value="Women’s Health">Women’s Health</option>
            </MultiselectField>
        );
    }
}
