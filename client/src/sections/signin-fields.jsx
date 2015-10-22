import React from 'react';

import Input from 'react-bootstrap/lib/Input';

import ValidatedInput from '../components/validated-input-field.jsx';

export default React.createClass({

    componentDidMount: function() {
        if ( this.props.focusElement ) {
            this.refs[this.props.focusElement].getInputDOMNode().focus();
        }
    },

    handleChange(field, e) {
        this.props.handleChange(field, e);
    },

    render: function() {
        return (
            <div>
                <ValidatedInput focusElement={this.props.focusElement}
                                onBlur={this.props.onBlur}
                                errorFields={this.props.errorFields}
                                label="Email (username)" type="text"
                                value={this.props.data.f_username}
                                required={true}
                                fieldName="f_username"
                                ref="f_username"
                                onChange={this.handleChange.bind(this, "f_username")}/>

                <ValidatedInput focusElement={this.props.focusElement}
                                onBlur={this.props.onBlur}
                                errorFields={this.props.errorFields}
                                label="Password" type="password"
                                value={this.props.data.f_password}
                                required={true}
                                fieldName="f_password"
                                onChange={this.handleChange.bind(this, "f_password")}/>
            </div>
        );
    }
});