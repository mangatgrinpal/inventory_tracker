import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { deleteRestaurant } from '../actions/restaurants'


import Item from './Item'
import ItemForm from './ItemForm'

import Button from 'react-bootstrap/Button'

const Restaurant = ( { deleteRestaurant, restaurant }) => {	
	

	const { id, attributes: { name }} = restaurant;


	return (
		<Fragment>
			<h2>View Inventory for {name}</h2>
			<Button variant="danger" onClick={()=> {deleteRestaurant(id)}}>
				X
			</Button>
				
		</Fragment>
	)
}

const mapStateToProps = state => {
	return {
		restaurants: state.restaurants
	}
}

export default connect(
	mapStateToProps,
	{ deleteRestaurant }
)(Restaurant)