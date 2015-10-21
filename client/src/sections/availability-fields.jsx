import React from 'react';

import Input from 'react-bootstrap/lib/Input';

import AvailabilityField from '../components/availability-field.jsx';
import YesNoField from '../components/yes-no-field.jsx';

export default React.createClass({
    render: function() {
        return (
            <div>

                <YesNoField data={this.props.data}
                    fieldName="q_share_room"
                    label="Are you able and willing to share a room?"
                />

                <div>
                    <h3>Which days are you available to volunteer?</h3>
                </div>
                <div>
                    <AvailabilityField label="Monday" />
                    <AvailabilityField label="Tuesday" />
                    <AvailabilityField label="Wednesday" />
                    <AvailabilityField label="Thursday" />
                    <AvailabilityField label="Friday" />
                    <div className="availability-field">
                        <Input label="Sabbath" type="checkbox"/>
                    </div>
                    <div className="availability-field">
                        <Input label="Sunday" type="checkbox"/>
                    </div>
                </div>

                <div>
                    <h3>Pre event</h3>
                </div>
                <div>
                    <AvailabilityField label="Logistics-Truck Unloading" />
                    <AvailabilityField label="Central Supply/ Inventory" />
                    <AvailabilityField label="Departmental set up/organization" />
                </div>

                <div>
                    <h3>Post event</h3>
                </div>
                <div>
                    <AvailabilityField label="Logistics tear down" />
                    <AvailabilityField label="Logistics Truck loading" />
                    <AvailabilityField label="Part I- Patient Follow up (labs sorting/organizing)" />
                    <AvailabilityField label="Part II-Patient Follow up (labs sorting/organizing)" />
                    <AvailabilityField label="Health Information Centers follow up" />
                </div>

            </div>
        );
    }
});