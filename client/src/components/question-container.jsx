import React from 'react';
import ReactAddons from 'react/addons';

export default React.createClass({

    mixins: [React.addons.PureRenderMixin],

    render: function() {
        var show = false;
        if ( this.props.criteria ) {

            var criteria = this.props.criteria;
            if ( typeof criteria === 'object' ) {
                var key = this.props.criteria.key;
                var value = this.props.criteria.value;
                if ( !value ) {
                    value = "false";
                }

                if ( value === "false" && !this.props.data[key] ) {
                    show = true;
                } else if (!value && !this.props.data[key] ){
                    show = true;
                } else if ( this.props.data[key] == value) {
                    show = true;
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