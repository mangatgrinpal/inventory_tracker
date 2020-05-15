import React, { Fragment } from 'react';
import Item from './Item';
import AddItemButton from './AddItemButton';

import { connect } from 'react-redux';

import { 
	fetchItems,
	addItem,
	deleteItem,
	setItemFormVisibility,
	clearFetchedItems,
	updateRecord,
	incrementRecord,
	decrementRecord,
	fetchRecords
} from '../actions/items';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CategoryContainer = ({ 
	category,
	restaurant,
	deleteItem,
	setItemFormVisibility,
	incrementRecord,
	decrementRecord,
	updateRecord,
	fetchRecords,
	items: { itemList },
	weeks: { currentWorkDay, previousWorkDay },
	users: { currentUser }
}) => {


	const categoryItems = itemList.filter(item => item.category.title === category.title)


	return (

			categoryItems.length > 0 ?

				<Fragment>
					<Row className='pt-1'>
						<Col>
							<h5 className='text-center section-name py-4'>{category.title}</h5>
						</Col>
					</Row>
					<Col className='d-none d-md-block'>
						<Row className='text-center'>
							<Col md={4}>
								<Row>
									<Col md={10}>
										Name (units)
									</Col>
								</Row>
								
							</Col>
							{category.trackable_attributes.length === 0 ?  

								<Col md={8} className='col-md-centered'>
									Whoops! This category doesn't have any attributes to track.
								</Col>

								:
								category.trackable_attributes.map( trackableAttribute => {
								return (
									<Col md={2} className='col-md-centered' key={trackableAttribute.id}>
										{trackableAttribute.name}
									</Col>
								)
							})}
						</Row>
					</Col>					

					{categoryItems.map( item => {

						return(
							<Item 
								key={item.id}
								restaurant={restaurant}
								item={item}
								fetchRecords={fetchRecords}
								deleteItem={deleteItem}
								currentWorkDay={currentWorkDay}
								previousWorkDay={previousWorkDay}
								updateRecord={updateRecord}
								incrementRecord={incrementRecord}
								decrementRecord={decrementRecord}
								currentUser={currentUser} />
						)
					})}
				
					<AddItemButton setItemFormVisibility={ setItemFormVisibility } />
				</Fragment> :
			<div/>
		
	)
}

const mapStateToProps = state => ({
	items: state.items,
	weeks: state.weeks,
	users: state.users
})

export default connect(
	mapStateToProps,
	{
		fetchItems,
		addItem,
		deleteItem,
		setItemFormVisibility,
		clearFetchedItems,
		updateRecord,
		fetchRecords,
		incrementRecord,
		decrementRecord
	}
)(CategoryContainer)