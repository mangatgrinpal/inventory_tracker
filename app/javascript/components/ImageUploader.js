import React, { Fragment, useCallback } from 'react';
import { DirectUpload } from '@rails/activestorage';

import Dropzone from 'react-dropzone';


const ImageUploader = ({imageData, setImageData}) => {

	const uploadFile = file => {

		const url = 'rails/active_storage/direct_uploads'
		const upload = new DirectUpload(file, url)



		upload.create((error, blob) => {
			if (error) {
				console.log(error)
				// handle the error
			} else {


				const hiddenField = document.createElement('input')
				hiddenField.setAttribute('type', 'hidden');
				hiddenField.setAttribute('value', blob.signed_in);
				hiddenField.name = input.name
				document.querySelector('form').appendChild(hiddenField)
			}
		})
	}

	return (
		<Dropzone
			onDrop={acceptedFiles => uploadFile(acceptedFiles)}
			multiple={false}>
			{({getRootProps, getInputProps}) => (
				<div {...getRootProps()}>
					<input {...getInputProps()} />
					<p>Drag 'n' drop some files here, or click to select files</p>
				</div>
			)}
		</Dropzone>
	)
}

export default ImageUploader