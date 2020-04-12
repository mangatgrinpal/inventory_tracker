import React, { Fragment, useEffect } from 'react';

import { useDropzone } from 'react-dropzone';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ImageUploader = ({
	imageData, 
	setImageData,
	setImageError
}) => {

	const { 
		getRootProps, 
		getInputProps,
		rootRef,
		inputRef 
	} = useDropzone({
		accept: 'image/*',
		onDrop: acceptedFiles => {
			clearImageError()
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

	const clearImageError = () => {
		setImageError('')
		document.getElementById('imageField').classList.remove('invalid-error-frame')
	}

	useEffect(()=> ()=> {
		// make sure to revoke the data uris to avoid memory leaks
		imageData.forEach(file => URL.revokeObjectURL(file.preview))
	},[imageData]);

	return (
		<Fragment>
			{imageData.length === 0 ? 
				<div 
					id='imageField'
					{...getRootProps({className: 'dropzone text-center'})}>

					<input {...getInputProps()} />
					<FontAwesomeIcon id='cameraIcon' icon='camera' size='2x' />
				</div>	:

				<aside className='thumbs-container justify-content-center'>
					{thumbs}
				</aside>	

			}
			
			
		</Fragment>
	)
}

export default ImageUploader