import React from 'react';
import ReactDOM from "react-dom";
import classNames from 'classnames'


class MultiselectField extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.commitChange = this.commitChange.bind(this);
    this.getValue = this.getValue.bind(this);
    this.state = {
      value: []
    };
  }

  getValue() {
      return this.props.value ? this.props.value.split(","): [];
  }

  handleChange(event) {
    this.setState({value: event.target.value.split(",")})
  }

  commitChange(e) {
      if ( this.props.onChange ) {
          this.props.onChange(this.props.fieldName, $(e.target).val().join(","));
      }
  }

  componentDidMount() {
      var targetField = $(ReactDOM.findDOMNode(this)).find("select");
      targetField.select2(
          { placeholder : this.props.placeHolder }
      );

      var self = this;
      targetField.on("select2:select", function (e) {
          self.commitChange(e);
      });
  }

  render() {
      var requiredLabel = this.props.required ? <span className='j-required'>*</span> : '';
      var message;
      var value = this.state.value;
      var fieldClassName = "form-control";
      if (this.props.errorFields) {
          var errorField = this.props.errorFields[this.props.fieldName];
          if ( errorField ) {
              message = errorField['message'];
              fieldClassName += " error";
          }
      }
      var errorMessage = message ? <span className='j-error-message'>{message}</span> : '';

      return (
          <div className={classNames('form-group', message ? 'has-error' : '')}>
              <label className="control-label">
                  <span>{requiredLabel}{this.props.label}</span>
              </label>
              {errorMessage}
              <div>
                  <select
                      multiple="true"
                      className={fieldClassName}
                      ref={this.props.ref}
                      value={this.getValue()}
                      onChange={this.props.onChange}
                      fieldName={this.props.fieldName}
                      style={{width: "100%"}}>
                      {this.props.children.map(entry =>
                          <option key={entry.props.value || entry.props.children} value={entry.props.value || entry.props.children}>{entry.props.children}</option>
                      )}
                  </select>
              </div>
          </div>
      );
  }
}


export default MultiselectField;
