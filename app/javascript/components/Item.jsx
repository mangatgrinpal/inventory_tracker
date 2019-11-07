import React, { Fragment } from 'react';


const Item = ( { attributes } ) => {
	const { name, units } = attributes;

	return (
		<Fragment>
			<li>
				{name}/{units}
			</li>
			
		</Fragment>
	)
}

export default Item