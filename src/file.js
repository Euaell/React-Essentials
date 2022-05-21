import axios from 'axios';

import React, { Component } from 'react';

class File extends Component {

	state = {
        // Initially, no file is selected
        selectedFile: null
	};
	
	// On file select (from the pop up)
	onFileChange = event => {
        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
	};
	
	// On file upload (click the upload button)
	onFileUpload = () => {
        // Create an object of formData
        const formData = new FormData();
        
        // Update the formData object
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );
        
        // Details of the uploaded file
        console.log(this.state.selectedFile);
        
        // Request made to the backend api
        // Send formData object
        axios.post("api/uploadfile", formData);
	};
	
	// File content to be displayed after
	// file upload is complete
	fileData = () => {
	
        if (this.state.selectedFile) {
            
            return (
                <div>
                    <h2>File Details:</h2>			
                    <p>File Name: {this.state.selectedFile.name}</p>                        
                    <p>File Type: {this.state.selectedFile.type}</p>	
                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>

                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
	};
	
	render() {
	
        return (
            <div className="file-field input-field row">
                <div className="btn col">
                    <span>File</span>
                    <input type="file" onChange={this.onFileChange} />
                </div>
                <div className="file-path-wrapper col">
                    <input className="file-path validate" type="text" />
                </div>
                <button className="btn waves-effect waves-light purple darken-1" onClick={this.onFileUpload}>
                    Upload!
                </button>
                <br />
                {this.fileData()}
            </div>
            
        );
	}
}

export default File;
