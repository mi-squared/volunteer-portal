import React from 'react';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/lib/Button.js';
import UploadField from '../components/UploadField.jsx';


class UploadPage extends React.Component {

  render() {
    return(
      <div>
        <UploadField
          {...this.props}
          >
        </UploadField>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return state.toJSON();
}

export const UploadPageContainer = connect(mapStateToProps)(UploadPage);
