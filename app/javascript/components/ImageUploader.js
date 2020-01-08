import React, { Fragment, useCallback } from 'react';

import Dropzone from 'react-dropzone';


const ImageUploader = ({imageData, setImageData}) => {

	return (
		<Dropzone
			accept='image/png, image/gif, image/jpeg'
			onDrop={acceptedImage => setImageData(acceptedImage)}>
			{({getRootProps, getInputProps}) => (
				<div {...getRootProps()}>
					<input {...getInputProps()} />
					{imageData === null ? 
						<p>Drag 'n' drop some files here, or click to select files</p> :
						<p>Image added</p>}
					
				</div>
			)}
		</Dropzone>
	)
}

export default ImageUploader