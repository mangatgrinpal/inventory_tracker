import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

const PrivateRouteWrapper = ({ 
	children,
	users: { isAuthenticated },
	...rest
}) => {

	return (
		<Route 
			{...rest}
			render={({ location }) =>
				isAuthenticated ? (
					children
				) : (
					<Redirect 
						to={{
							pathname: '/sign-in',
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
}

const mapStateToProps = state => ({
	users: state.users
})

export default connect(
	mapStateToProps
	)(PrivateRouteWrapper)