import React, { Fragment, useState, useEffect } from "react"

import Item from "./Item"

const Restaurant = (	) => {
	return (
		<Fragment>
			This is the inventory for (Restaurant Name)
			<ul>
				<Item />			
			</ul>

		</Fragment>
	)
}

export default Restaurant