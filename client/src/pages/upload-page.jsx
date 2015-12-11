import React from 'react';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/lib/Button.js';
import UploadField from '../components/UploadField.jsx';
import composePage from './base-page.jsx';
import * as actionCreators from '../action_creators';


class UploadPage extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          alertVisible: false,
          errorFields: {},
          errorMessage : '',
          disabled: false,
          value: "Continue"
      };

      this.doContinue = this.doContinue.bind(this);
      this.doBack = this.doBack.bind(this);
  }

  doContinue() {
      // if ( this.props.doValidate( this.schema ) ) {
      //     // disable button on click to prevent multiple clicks
      //     this.setState({
      //       disabled: true,
      //       value: "Please Wait"
      //     });
      //     // save the application if passes validation
      //     var self = this;
      //     this.props.saveApplication().then( () => {
      //         // then move on to next page
      //         var isEsigned = this.props.data['q_esigned'] === 'true';
      //         if ( isEsigned ) {
                  this.props.history.pushState(null, '/done-application');
      //         } else {
      //             this.props.history.pushState(null, '/esign');
      //         }
      //     });
      // } else {
      //     this.props.handleAlertShow();
      // }
  }

  doBack() {
      this.props.history.goBack();
  }

  render() {
    return(
      <div className="container well">
        <div className="col-md-12">
          <h1>Upload Forms</h1>
          <div>
            {this.props.documentsList && this.props.documentsList.map((key) =>
              <UploadField
                {...this.props}
                >
              </UploadField>
            )}

            <div className="j-page-nav col-md-12">
                <Button onClick={this.doContinue} id="submit-detail" className="btn btn-primary" disabled={this.state.disabled}>{this.state.value}</Button>
                <Button onClick={this.doBack} id="back-detail">Back</Button>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return state.toJSON();
}

export const UploadPageContainer = connect(mapStateToProps, actionCreators)(composePage(UploadPage));
