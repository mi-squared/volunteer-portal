import React from 'react';

import Input from 'react-bootstrap/lib/Input';
import DropdownField from './dropdown-field.jsx';

class DayLength extends React.Component {

    render() {
        return (
            <select
                value={this.props.dayLength}
                onChange={this.props.onChange}>
                <option value="full">Full day</option>
                <option value="half">Half day</option>
            </select>
        )
    }
}

class DayHalf extends React.Component {
    render() {
        return (
            <select>
                <option>AM</option>
                <option>PM</option>
            </select>
        )
    }
}

export default class AvailabilityField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dayLength : "full",
            canDo : "false"
        }
    }

    changeDayLength(field) {
        this.setState( {
            dayLength: field.target.value
        });
    }

    changeCanDo(field) {
        this.setState( {
            canDo: "" + field.target.checked
        });
    }

    render() {
        var dayHalf;
        if ( this.state.dayLength === 'half') {
            dayHalf = <DayHalf />;
        }

        var dayLength;
        if ( this.state.canDo === "true" ) {
            dayLength = <DayLength {...this.props}
                onChange={this.changeDayLength.bind(this)}
                value={this.state.dayLength}
            />;
        }

        return (
            <div className="availability-field">

                <Input
                    label={this.props.label}
                    type="checkbox"
                    value="true"
                    onChange={this.changeCanDo.bind(this)}
                />
                {dayLength}
                {dayHalf}
            </div>
        );
    }
}