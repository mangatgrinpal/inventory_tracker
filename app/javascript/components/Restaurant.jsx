import React, { Fragment, useState, useEffect } from 'react'


import Item from './Item'
import ItemForm from './ItemForm'

import Button from 'react-bootstrap/Button'

const Restaurant = ( props ) => {
	
	let { name, items } = props

	return (
		<Fragment>
			<h2>View Inventory for {name}</h2>
				<ul>
					
				</ul>
		</Fragment>
	)
}

export default Restaurant