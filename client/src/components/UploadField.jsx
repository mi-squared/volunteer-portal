import React from 'react'
import $ from 'jquery'
import Button from 'react-bootstrap/lib/Button.js';
import fetchClient from "../fetchClient";


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
        this.setState({uploadState: 'uploading'})
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
    handleFileChange(event) {
        let localFile = event.currentTarget.files[0];
        this.uploadDocument(localFile);
    }
    uploadDocument(documentResult) {
        const file = this.refs.theFile.files[0];
        const url = this.state.postUrl;
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
                  type: file.type,
                  url: this.state.getUrl,
                  application_id: this.props.data.id
                })
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
    // document() {
    //     return this.props.data.uploads.find(d => d.src_name === this.props.fileName)
    // }
    buttonText(uploadState, document) {
        if (uploadState === 'uploading') {
            return 'Uploading...'
        }
        return document ? "Change" : "Upload"
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
        // const { uploadState, uploadPercent } = this.state
        // const document = this.document()
        const btnClass = document ? "btn btn-default btn-xs" : "btn btn-default"
        return (
            <div className="form-group center" style={{border: '1px solid #ccc', borderRadius: '3px', padding: '0 15px 15px 15px'}}>

                <h3>{this.props.fileName} <Button className="btn-primary btn-sm"
                                                  onClick={this.handleDownloadClick}
                                                  href={this.state.downloadUrl}
                                                  target="_blank">Download</Button></h3>
                {uploadState === "uploading" && this.renderProgressBar(uploadPercent)}

                <a ref="downloadLink" href={this.state.downloadUrl} target="_blank" style={{visibility: "hidden", cursor:'pointer'}}></a>

                <form ref="theForm" method="POST" encType="multipart/form-data">
                    <input ref="theFile" name="file" type="file" style={{ visibility: 'hidden', width: '1px', height: '1px' }} onChange={this.handleFileChange.bind(this)} />
                    {document && <strong>{document.fileName}&nbsp;</strong>}
                    <Button ref="theButton" type="button" className="btn-sm" onClick={this.handleUploadClick.bind(this)}>{this.buttonText(uploadState, document)}</Button>
                </form>

            </div>
        )
    }
}

export default UploadField;
