import React, { Fragment } from 'react';

import DropzoneComponent from 'react-dropzone-component';

const csrfToken = document.getElementsByName('csrf-token')[0].content

const componentConfig = {
	iconFiletypes: ['.jpg', '.png', '.gif'],
	showFiletypeIcon: true,
	maxFiles: 1,
	postUrl: 'no-url'
}

const djsConfig = {
	acceptedFiles: 'image/jpeg, image/png, image/gif',
	autoProcessQueue: false,
	uploadMultiple: false,
	headers: { 'X-CSRF-Token': csrfToken }
}

const ImageUploader = ({imageData, setImageData}) => {

	const eventHandlers = {
		addedfile: image => setImageData(image)
	}

	return (
		<DropzoneComponent 
			config={componentConfig} 
			djsConfig={djsConfig} 
			eventHandlers={eventHandlers} />

	)
}

export default ImageUploader