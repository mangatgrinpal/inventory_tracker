import React from 'react'

import { Link } from 'react-router-dom'


const Navigation = () => {
	return (
		<ul>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/dashboard' >Dashboard</Link>
			</li>

		</ul>
	)
}

export default Navigation