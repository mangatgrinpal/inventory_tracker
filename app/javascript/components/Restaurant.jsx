import React, { Fragment, useState, useEffect } from 'react'

import Item from './Item'
import ItemForm from './ItemForm'

const Restaurant = ( props ) => {
	
	let { name } = props

	return (
		<Fragment>
			This is the inventory for {name}
			<ul>
				<Item />
			</ul>
				<ItemForm />

		</Fragment>
	)
}

export default Restaurant