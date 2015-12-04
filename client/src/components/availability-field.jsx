import React from 'react';

import Input from 'react-bootstrap/lib/Input';
import DropdownField from './dropdown-field.jsx';

class DayLength extends React.Component {

    render() {
        return (
            <select
                value={this.props.value}
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
            <select
                value={this.props.value}
                onChange={this.props.onChange}>
                <option value="am">AM</option>
                <option value="pm">PM</option>
            </select>
        )
    }
}

export default class AvailabilityField extends React.Component {
    constructor(props) {
        super(props);

        var dayLength;
        var available;
        var dayHalf;
        var value = props.value;

        if ( value == 'pm' || value == 'am' ) {
            available = true;
            dayLength = 'half';
            dayHalf = value;
        } else {
            if ( value == 'full' ) {
                available = true;
            } else {
                available = false;
            }
        }

        var state = {
            available : available,
            dayLength : dayLength,
            dayHalf : dayHalf
        };


        this.state = state;

        // console.log(props.fieldName, ":", props.value, ":", this.state);
    }

    //componentWillMount() {
    //    var props = this.props;
    //
    //}

    changeDayHalf(field) {
        this.setState( {
            dayHalf: field.target.value
        });

        var self = this;
        setTimeout( function() {
            self.commitChange();
        }, 1);
    }

    changeDayLength(field) {
        this.setState( {
            dayLength: field.target.value,
            dayHalf : 'am'
        });

        var self = this;
        setTimeout( function() {
            self.commitChange();
        }, 1);
    }

    changeAvailable(field) {
        this.setState( {
            available: field.target.checked,
            dayLength: 'full'
        });

        var self = this;
        setTimeout( function() {
            self.commitChange();
        }, 1);

    }

    commitChange() {
        if ( this.props.onChange ) {
            var fieldValue;
            if ( !this.state.available ) {
                fieldValue = 'false';
            } else {
                if ( this.state.dayLength == 'full' || !this.state.dayHalf ) {
                    fieldValue = 'full';
                } else if (this.state.dayHalf )  {
                    fieldValue = this.state.dayHalf;
                } else {
                    fieldValue = 'am';
                }
            }

            // console.log(this.props.fieldName, fieldValue);

            this.props.onChange(this.props.fieldName, fieldValue);
        }
    }

    render() {
        var dayHalf;
        if ( this.state.available && this.state.dayLength === 'half') {
            dayHalf = <DayHalf
                onChange={this.changeDayHalf.bind(this)}
                value={this.state.dayHalf}
                ref="dayHalf"
            />;
        }

        var dayLength;
        if ( this.state.available ) {
            dayLength = <DayLength
                onChange={this.changeDayLength.bind(this)}
                value={this.state.dayLength}
                ref="dayLength"
            />;
        }

        return (
            <div className="availability-field">

                <label>
                    <input
                        type="checkbox"
                        value="true"
                        checked={this.state.available}
                        onChange={this.changeAvailable.bind(this)}
                        id={this.props.fieldName && this.props.fieldName.replace('data.q_', '')}
                    />
                    {this.props.label}
                </label>
                {dayLength}
                {dayHalf}
            </div>
        );
    }
}
