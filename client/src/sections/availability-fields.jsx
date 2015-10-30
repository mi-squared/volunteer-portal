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

                <YesNoField
                    {...this.props}
                    fieldName="data.q_share_room"
                    ref="data.q_share_room"
                    value={this.props.data.q_share_room}
                    label="Are you able and willing to share a room?"
                    onChange={this.handleChange}
                />

                <YesNoField
                    {...this.props}
                    fieldName="data.q_available_entire_time"
                    ref="data.q_available_entire_time"
                    value={this.props.data.q_available_entire_time}
                    label="Aside from any emergencies are you able to help the entire time?"
                    onChange={this.handleChange}
                />

                <QuestionContainer {...this.props}
                    criteria={ {key : 'q_available_entire_time', value : "false" } }>

                    <div>
                        <label>Which days are you available to volunteer?</label>
                    </div>
                    <div>
                        <AvailabilityField {...this.props}
                            label="Monday"
                            fieldName="data.q_available_day_mon"
                            ref="data.q_available_day_mon"
                            value={this.props.data.q_available_day_mon}
                            onChange={this.handleChange}
                        />
                        <AvailabilityField {...this.props}
                            label="Tuesday"
                            fieldName="data.q_available_day_tue"
                            ref="data.q_available_day_tue"
                            value={this.props.data.q_available_day_tue}
                            onChange={this.handleChange}
                        />
                        <AvailabilityField {...this.props}
                            label="Wednesday"
                            fieldName="data.q_available_day_wed"
                            ref="data.q_available_day_wed"
                            value={this.props.data.q_available_day_wed}
                            onChange={this.handleChange}
                        />
                        <AvailabilityField {...this.props}
                            label="Thursday"
                            fieldName="data.q_available_day_thu"
                            ref="data.q_available_day_thu"
                            value={this.props.data.q_available_day_thu}
                            onChange={this.handleChange}
                        />
                        <AvailabilityField {...this.props}
                            label="Friday"
                            fieldName="data.q_available_day_fri"
                            ref="data.q_available_day_fri"
                            value={this.props.data.q_available_day_fri}
                            onChange={this.handleChange}
                        />
                        <AvailabilityField {...this.props}
                            label="Sabbath"
                            fieldName="data.q_available_day_sat"
                            ref="data.q_available_day_sat"
                            value={this.props.data.q_available_day_sat}
                            onChange={this.handleChange}
                        />
                        <AvailabilityField {...this.props}
                            label="Sunday"
                            fieldName="data.q_available_day_sun"
                            ref="data.q_available_day_sun"
                            value={this.props.data.q_available_day_sun}
                            onChange={this.handleChange}
                        />
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