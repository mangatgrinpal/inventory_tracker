import React from 'react'

import { NavLink } from 'react-router-dom'


const Navigation = () => {
	return (
		<ul>
			<li>
				<NavLink to='/' activeClassName='active'>Home</NavLink>
			</li>
			<li>
				<NavLink to='/dashboard' activeClassName='active'>Dashboard</NavLink>
			</li>

		</ul>
	)
}

export default Navigation