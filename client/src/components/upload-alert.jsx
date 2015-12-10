import React from 'react';
import {Link} from "react-router";

class UploadAlert extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let eSigned = this.props.data["q_esigned"]
        let alertShow = eSigned ? true : false
        if (alertShow) {
            return (
              <div className="alert alert-warning text-center" role="alert">
                  <h4 style={{verticalAlign: "middle", display: "inline-block", margin: "auto"}}>
                      <b>Notice:</b> You have documents that are pending. <Link to={'/upload-forms'}><u>Click here</u></Link> to view and complete your pending documents.
                  </h4>
              </div>
            );
        } else {
            return <div/>;
        }
    }
}

export default UploadAlert;
