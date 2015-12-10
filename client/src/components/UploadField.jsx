import React from 'react'
import $ from 'jquery'
// import { postDocumentUploadURL } from '../mirador_client'
// import { putEndpointFileRaw } from '../mirador_client/api'

// type Props = {
//     'onUpload': Function,
// }

class UploadField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {uploadState: '', uploadPercent: 0}
    }
    handleUploadClick(event) {
        event.preventDefault()
        this.setState({uploadState: 'uploading'})
        this.refs.theFile.click()
    }
    handleFileChange(event) {
        let localFile = event.currentTarget.files[0]
        let documentUploadMeta = {
            applicationUuid: this.props.application.uuid,
            fileName: localFile.name,
            contentType: localFile.type,
        }
        // postDocumentUploadURL(documentUploadMeta).then(this.uploadDocument.bind(this))
    }
    uploadDocument(documentResult) {
        const file = this.refs.theFile.files[0]
        const uuid = documentResult.uuid
        const url = documentResult.url
        $.ajax( {
            url: url,
            type: 'PUT',
            data: file,
            processData: false,
            contentType: file.type,
            cache: false,
            success: (response) => {
                const doc = this.generateDoc(uuid, url)
                this.props.onUpload(doc)
                this.setState({uploadState: ''})
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
    generateDoc(uuid: string, url) {
        let localFile = this.refs.theFile.files[0]
        let urlWithoutQuerystring = url.split("?")[0]
        return {
            contentType: localFile.type,
            fileName: localFile.name,
            title: this.props.title,
            url: urlWithoutQuerystring,
            uuid: uuid,
        }
    }
    // document() {
    //     return this.props.documents.find(d => d.title === this.props.title)
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
        const { uploadState, uploadPercent } = this.state
        // const document = this.document()
        const btnClass = document ? "btn btn-default btn-xs" : "btn btn-default"
        return (
            <div className="form-group center" style={{border: '1px solid #ccc', borderRadius: '3px', padding: '0 15px 15px 15px', width: '80%'}}>
                <h2>{this.props.title}</h2>
                {uploadState === "uploading" && this.renderProgressBar(uploadPercent)}
                <form ref="theForm" method="POST" encType="multipart/form-data">
                    <input ref="theFile" name="file" type="file" style={{ visibility: 'hidden', width: '1px', height: '1px' }} onChange={this.handleFileChange.bind(this)} />
                    {document && <strong>{document.fileName}&nbsp;</strong>}
                    <button ref="theButton" type="button" className={btnClass} onClick={this.handleUploadClick.bind(this)}>{this.buttonText(uploadState, document)}</button>
                </form>
            </div>
        )
    }
}

export default UploadField;
