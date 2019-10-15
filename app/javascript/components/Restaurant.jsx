import React, { Fragment, useState, useEffect } from 'react'

import Item from './Item'
import ItemForm from './ItemForm'

const Restaurant = ( name ) => {
	return (
		<Fragment>
			This is the inventory for (Restaurant Name)
			<ul>
				<Item />
			</ul>
				<ItemForm />

		</Fragment>
	)
}

export default Restaurant