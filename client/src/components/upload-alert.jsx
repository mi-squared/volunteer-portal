import React from 'react';
import {Link} from "react-router";
import documentMap from "../documents";

class UploadAlert extends React.Component {
    constructor(props) {
        super(props)
    }

    isUploaded(file) {
        if (this.props.data.uploads) {
          return this.props.data.uploads.find(u => u.src_name === file.name)
        }
        return false
    }

    filterDocs() {
      return documentMap.filter((documentSpec) => {
        return Object.keys(documentSpec.requirements).every((req) => {
          return this.props.data[req] === documentSpec.requirements[req] && !this.isUploaded(documentSpec)
        })
      })
    }

    unsignedDocs() {
      return this.filterDocs().length !== 0
    }

    render() {
        let eSigned = this.props.data["q_esigned"]
        if (eSigned && this.unsignedDocs()) {
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
