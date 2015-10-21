import React from 'react';
import ReactAddons from 'react/addons';

export default React.createClass({

    mixins: [React.addons.PureRenderMixin],

    render: function() {
        var show = true;
        if ( this.props.criteria ) {

            var criteria = this.props.criteria;
            if ( typeof criteria === 'object' ) {
                var key = this.props.criteria.key;
                var value = this.props.criteria.value;
                if ( this.props.data[key] !== value ) {
                    show = false;
                }
            } else if ( typeof criteria === 'function' ) {
                show = criteria();
            }
        }

        if ( show ) {
            return (
                <div>
                {this.props.children}
                </div>
            );
        } else {
            return <div/>;
        }
    }
});