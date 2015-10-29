import React from 'react';

import Input from 'react-bootstrap/lib/Input';

import QuestionContainer from '../components/question-container.jsx';
import AvailabilityField from '../components/availability-field.jsx';
import YesNoField from '../components/yes-no-field.jsx';
import BaseSection from './base-section.jsx'

export default class AvailabilityFields extends BaseSection {
    render() {
        return (
            <div>
                <YesNoField {...this.props}
                    fieldName="data.data.q_share_room"
                    label="Are you able and willing to share a room?"
                />

                <YesNoField {...this.props}
                    fieldName="data.data.q_available_entire_time"
                    label="Aside from any emergencies are you able to help the entire time?"
                />

                <QuestionContainer {...this.props}
                    criteria={ {key : 'q_available_entire_time', value : "false" } }>

                    <div>
                        <label>Which days are you available to volunteer?</label>
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
                        <label>Which pre-event activities can you help with?</label>
                    </div>
                    <div>
                        <AvailabilityField label="Logistics-Truck Unloading" />
                        <AvailabilityField label="Central Supply/ Inventory" />
                        <AvailabilityField label="Departmental set up/organization" />
                    </div>

                    <div>
                        <label>Which post-event activities can you help with?</label>
                    </div>
                    <div>
                        <AvailabilityField label="Logistics tear down" />
                        <AvailabilityField label="Logistics Truck loading" />
                        <AvailabilityField label="Part I- Patient Follow up (labs sorting/organizing)" />
                        <AvailabilityField label="Part II-Patient Follow up (labs sorting/organizing)" />
                        <AvailabilityField label="Health Information Centers follow up" />
                    </div>

                </QuestionContainer>

            </div>
        );
    }
}