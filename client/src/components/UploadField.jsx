import React from 'react'
import $ from 'jquery'
import fetchClient from "../fetchClient";
import { Button, Glyphicon } from 'react-bootstrap'


class UploadField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {uploadState: '', uploadPercent: 0}
        this.handleDownloadClick = this.handleDownloadClick.bind(this);
    }
    componentWillMount() {
      fetchClient.getDocumentUrl(this.props.fileName).then(
        (response) => {
          response.json().then(
            (json) => {
              this.setState({downloadUrl: json.url})
            }
          )
        }
      )
    }
    handleUploadClick(event) {
        event.preventDefault()
        let id = this.props.data.id;
        let fileName = this.props.fileName;
        fetchClient.getUploadUrl(id, fileName).then(
          (response) => {
            response.json().then(
              (json) => {
                this.setState({
                                postUrl: json.postUrl,
                                getUrl: json.getUrl
                              })
              }
            )
          }
        )
        this.refs.theFile.click()
    }
    handleDownloadClick(event) {
        // event.preventDefault()
        // fetchClient.getDocumentUrl(this.props.fileName).then(
        //   (response) => {
        //     response.json().then(
        //       (json) => {
        //         this.setState({downloadUrl: json.url})
        //         this.refs.downloadLink.click();
        //       }
        //     )
        //   }
        // )
    }

    validateFileType(file) {
      let requiredType = this.props.fileType;
      let fileType = file.name.match(/\.(.+)/)[1];
      if (fileType === requiredType) {
        this.setState({
          warningMsg: '',
          uploadState: 'uploading'
        })
        return true;
      } else {
        this.setState({
          uploadState: '',
          warningMsg: `Please only upload ${requiredType} documents for this form`
        })
        return false
      }
    }

    handleFileChange(event) {
      let localFile = event.currentTarget.files[0];
      if (this.validateFileType(localFile)) {
          this.uploadDocument(localFile);
      }
    }

    uploadDocument(documentResult) {
        let file = this.refs.theFile.files[0];
        let url = this.state.postUrl;
        $.ajax( {
            url: url,
            type: 'PUT',
            data: file,
            processData: false,
            contentType: file.type,
            cache: false,
            success: (response) => {
                this.setState({uploadState: ''})
                this.props.addUpload({
                  src_name: this.props.fileName,
                  size: file.size,
                  content_type: file.type,
                  url: this.state.getUrl,
                  application_id: this.props.data.id
                })
                this.props.saveApplication()
            },
            xhr: () => {
                let xhr = $.ajaxSettings.xhr()
                if (xhr.upload) {
                    xhr.upload.addEventListener('progress', this.progressHandler.bind(this), false)
                }
                return xhr
            }
        })
        this.setState({uploadPercent: 0})
    }
    progressHandler(event) {
        const percent = Math.round( (event.loaded/event.total) * 100 )
        this.setState({uploadPercent: percent})
    }

    findUpload() {
        if (this.props.data.uploads) {
          return this.props.data.uploads.find(u => u.src_name === this.props.fileName)
        }
        return ""
    }
    
    buttonText(uploadState, upload) {

        if (uploadState === 'uploading') {
            return 'Uploading...'
        }
        return upload ? "Change" : "Upload"
    }
    renderProgressBar(uploadPercent) {
        return (
            <div className="progress">
                <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow={uploadPercent} aria-valuemin="0" aria-valuemax="100" style={{width: uploadPercent + '%'}}>
                    <span className="sr-only">{uploadPercent}% Complete</span>
                </div>
            </div>
        )
    }
    render() {
        const { uploadState, uploadPercent } = this.state
        const upload = this.findUpload()
        let btnClass = upload ? "btn btn-default btn-xs" : "btn btn-default"
        let uploadIcon = upload ? "ok" : "remove"
        let iconColor = upload ? "green" : "red"
        let uploadStatus = upload ? "Your file has been uploaded." : "Please upload your file."
        let alertClass = this.state.warningMsg ? "alert alert-danger" : "";
        return (
            <div className="form-group center" style={{border: '1px solid #ccc', borderRadius: '3px', padding: '0 15px 15px 15px'}}>

                <h3>
                    {this.props.fileName}
                    &nbsp;
                    {this.state.downloadUrl ?
                        <Button className="btn-primary btn-sm"
                                onClick={this.handleDownloadClick}
                                href={this.state.downloadUrl}
                                target="_blank">Download</Button>
                    : ""}
                </h3>

                {uploadState === "uploading" && this.renderProgressBar(uploadPercent)}

                <a ref="downloadLink" href={this.state.downloadUrl} target="_blank" style={{visibility: "hidden", cursor:'pointer'}}></a>

                <form ref="theForm" method="POST" encType="multipart/form-data">
                    <input ref="theFile" name="file" type="file" style={{ visibility: 'hidden', width: '1px', height: '1px' }} onChange={this.handleFileChange.bind(this)} />
                    {upload && <strong>{upload.fileName}&nbsp;</strong>}
                      <div className={alertClass}>
                        <Button ref="theButton" type="button" className={btnClass} onClick={this.handleUploadClick.bind(this)}>{this.buttonText(uploadState, upload)}</Button>
                        &nbsp;{this.state.warningMsg}
                      </div>
                </form>

                <div style={{marginTop: '15px'}}>
                    <Glyphicon glyph={uploadIcon} style={{color: iconColor }}/> {uploadStatus}
                </div>

            </div>
        )
    }
}

export default UploadField;
