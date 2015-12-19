import React from 'react';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/lib/Button.js';
import UploadField from '../components/UploadField.jsx';
import composePage from './base-page.jsx';
import * as actionCreators from '../action_creators';
import documentMap from "../documents";


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
    this.setState({
      disabled: true,
      value: "Please Wait"
    });
    this.props.saveApplication().then(() => {
      this.props.history.pushState(null, '/done-application');
    })
      //     this.props.handleAlertShow();

  }

  doBack() {
      this.props.history.goBack();
  }

  filterDocs() {
    return documentMap.filter((documentSpec) => {
      return Object.keys(documentSpec.requirements).every((req) => {
        return this.props.data[req] === documentSpec.requirements[req]
      })
    })
  }

  render() {
    return(
      <div className="container well">
        <div className="col-md-12">
          <h1>Upload Forms</h1>
          <div>
            {this.props.documentsList && this.props.documentsList.map((documentSpec) =>
              <UploadField
                {...this.props}
                key={documentSpec}
                fileName={documentSpec}
                fileType={documentSpec.match(/\.(pdf|docx|doc)/)[1]}
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
