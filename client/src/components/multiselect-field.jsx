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
          this.props.onChange(this.props.fieldName, $(e.target).val() ?  $(e.target).val().join(",") : '');
      }
  }

  componentDidMount() {
      var targetField = $(ReactDOM.findDOMNode(this)).find("select");
      var found = false;
      targetField.select2({
        // tags: true,
        placeholder : this.props.placeHolder,
        // createTag: function(tag) {
        //     // check if the option is already there
        //     targetField.find("option").each(function() {
        //         if ($.trim(tag.term).toUpperCase() == $.trim($(this).text()).toUpperCase()) {
        //             found = true;
        //         }
        //     });
        //     // show the suggestion only if a match was not found
        //     if (!found) {
        //           return {
        //           id: tag.term,
        //           text: tag.term,
        //           isNew: true
        //       };
        //     }
        // }
      });

      var self = this;
      targetField.on("select2:select", function (e) {
          self.commitChange(e);
      });
      targetField.on("select2:unselect", function (e) {
          self.commitChange(e);
      });
  }

  getOptions() {
    var id = this.props.fieldName.replace('data.q_', '').replace('ed_area', 'ing_area'); // this is how the list is labeled in the database
    if (this.props.formLists && this.props.formLists[id]) {
      return this.props.formLists[id]; //volunteered_area and volunteering_area share same list options
    } else {
      return [];
    }
  }

  render() {
      var requiredLabel = this.props.required ? <span className='j-required'>*</span> : '';
      var message;
      var fieldClassName = "form-control";
      if (this.props.errorFields) {
          var errorField = this.props.errorFields[this.props.fieldName];
          if ( errorField ) {
              message = errorField['message'];
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
                      fieldName={this.props.fieldName}
                      style={{width: "100%"}}>
                      {this.getOptions().map(option =>
                          <option key={option.value} value={option.value}>{option.name}</option>
                      )}
                  </select>
              </div>
          </div>
      );
  }
}


export default MultiselectField;
