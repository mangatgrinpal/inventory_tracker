import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { deleteRestaurant } from '../actions/restaurants';
import { fetchItems } from '../actions/items';

import { useHistory } from 'react-router-dom';

import Loading from './Loading';
import Item from './Item';
import ItemForm from './ItemForm';


import Button from 'react-bootstrap/Button';

const Restaurant = ( { deleteRestaurant, restaurant, fetchItems, items: { itemList, isFetching } }) => {	

	const { id, attributes: { name }} = restaurant;
	const history = useHistory();

	useEffect(() => {
		fetchItems(id)

	},[ fetchItems ])

	console.log(itemList)

	return (
		<Fragment>
			<h2>View Inventory for {name}</h2>
			<Button variant="danger" onClick={()=> {deleteRestaurant(id, history)}}>
				X
			</Button>
			{isFetching ? 
				<Loading/> : 
				itemList.map(item=>{
					let itemInfo = item.attributes
					return(
						<Item key={item.id} item={itemInfo} />
					)
				})}
				
		</Fragment>
			
	)
}

const mapStateToProps = state => 
({	
	restaurants: state.restaurants,
	items: state.items
});

export default connect(
	mapStateToProps,
	{ deleteRestaurant, fetchItems }
)(Restaurant)