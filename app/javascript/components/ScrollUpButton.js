import React, { Fragment } from 'react';

import Row from 'react-bootstrap/Row';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ScrollUpButton = () => {

	const scrollToTop = () => {

		window.scrollTo({
			top:0,
			left:0,
			behavior: 'smooth'
		});
	}


	return (

		<Row className='pt-5 justify-content-end'>

			<FontAwesomeIcon
				id='scroll-up-button'
				className='clickable-icon'
				title='Scroll to top'
				alt='Scroll to top' 
				icon={['fas','arrow-alt-circle-up']}
				size='4x'
				onClick={()=>{scrollToTop()}}/>
		</Row>


	)
}

export default ScrollUpButton
