import React, { Fragment, useEffect } from 'react';

import { useDropzone } from 'react-dropzone';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';


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
			<div className='thumb-inner embed-responsive justify-content-end'>
				<FontAwesomeIcon
					className='position-fixed'
					icon='times-circle'
					size='2x'
					onClick={()=>{setImageData([])}}>
					click me
				</FontAwesomeIcon>
				<img 
					src={file.preview}
					className='thumb-img embed-responsive-item'
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
			{imageData.length === 0 ? 
				<div {...getRootProps({className: 'dropzone'})}>
					<input {...getInputProps()} />
					<p className='text-center'>Drag 'n' drop some files here, or click to select</p>
				</div>	:

				<aside className='thumbs-container justify-content-center'>
					{thumbs}
				</aside>	

			}
			
			
		</Fragment>
	)
}

export default ImageUploader