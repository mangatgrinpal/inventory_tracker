import React, { Fragment, useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import Item from './Item'
import ItemForm from './ItemForm'

import Button from 'react-bootstrap/Button'

const Restaurant = ( props ) => {
	
	let { name } = props
	let { topicId } = useParams();

	return (
		<Fragment>
			
			
				View Inventory for {name}
			
		</Fragment>
	)
}

export default Restaurant