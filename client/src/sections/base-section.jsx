import React from 'react';

export default class BaseSection extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(field, e) {
        this.props.data.updateField( {
            key : field,
            value : e.target.value
        });
    }

    componentWillReceiveProps(nextProps) {
        if ( nextProps.submitTS !== this.props.submitTS ) {
            var self = this;
            setTimeout( function() {
                var ref = self.refs[nextProps.focusElement];
                if (ref && ref.getInputDOMNode ) {
                    ref.getInputDOMNode().focus();
                }
            }, 1);
        }
    }
}

