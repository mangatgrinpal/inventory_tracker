import React, { Fragment } from 'react';


const Item = ( { item } ) => {
	const { name, units } = item;

	return (
		<Fragment>
			<li>
				{name}/{units}
			</li>
			
		</Fragment>
	)
}

export default Item