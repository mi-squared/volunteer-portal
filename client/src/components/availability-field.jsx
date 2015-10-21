import React from 'react';

import Input from 'react-bootstrap/lib/Input';
import DropdownField from './dropdown-field.jsx';

export default React.createClass({
    render: function() {
        return (
            <div className="availability-field">
                <Input label={this.props.label} type="checkbox"/>
                <select>
                    <option>Full day</option>
                    <option>Half day</option>
                </select>
                <select>
                    <option>AM</option>
                    <option>PM</option>
                </select>
            </div>
        );
    }
});