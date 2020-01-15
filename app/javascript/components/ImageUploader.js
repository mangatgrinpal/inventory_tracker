import React, { Fragment, useEffect } from 'react';

import { useDropzone } from 'react-dropzone';


const ImageUploader = ({imageData, setImageData}) => {

	const { getRootProps, getInputProps } = useDropzone({
		accept: 'image/*',
		onDrop: acceptedFiles => {
			setImageData(acceptedFiles.map(file=> Object.assign(file, {
				preview: URL.createObjectURL(file)
			})));
		}
	})

	const thumbs = imageData.map(file=> (
		<div className='thumb' key={file.name}>
			<div className='thumb-inner'>
				<img 
					src={file.preview}
					className='img'
				/>
			</div>
		</div>
	));

	useEffect(()=> ()=> {
		// make sure to revoke the data uris to avoid memory leaks
		imageData.forEach(file => URL.revokeObjectURL(file.preview))
	},[imageData]);

	return (
		<Fragment>
			<div {...getRootProps({className: 'dropzone'})}>
				<input {...getInputProps()} />
				<p>Drag 'n' drop some files here, or click to select</p>
			</div>
			<aside className='thumbs-container'>
				{thumbs}
			</aside>
		</Fragment>
	)
}

export default ImageUploader