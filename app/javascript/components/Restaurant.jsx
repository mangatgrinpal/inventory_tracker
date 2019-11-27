import React, { Fragment, useState, useEffect } from 'react';
import Loading from './Loading';
import Item from './Item';
import MeatItem from './MeatItem';
import ItemForm from './ItemForm';
import DateRange from './DateRange';
import RecordForm from './RecordForm';
import { connect } from 'react-redux';


import { deleteRestaurant } from '../actions/restaurants';
import { 
	fetchItems,
	addItem,
	deleteItem,
	clearFetchedItems,
	updateRecord
} from '../actions/items';
import { fetchRecords } from '../actions/records';

import { useHistory, useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const Restaurant = ({ 
	deleteRestaurant, 
	fetchItems,
	fetchRecords,
	addItem,
	deleteItem,
	clearFetchedItems,
	updateRecord,
	items: { itemList, isFetching },
	weeks: { currentWorkDay },
	records: { recordList }
}) => {	

	const { id } = useParams();
	const history = useHistory();



	useEffect(() => {
		fetchItems(id)

		// return () => {
		// 	clearFetchedItems()
		// }


	},[ id ])

	let lineItems = itemList.filter(item => item.category == 'Line')
	let miscItems = itemList.filter(item => item.category == 'Misc')
	let meatItems = itemList.filter(item => item.category == 'Meat')



	return (
		<Fragment>
			<Row>
				<Col className='clearfix'>
					<Button className='float-right' variant='danger' onClick={()=> {deleteRestaurant(id, history)}}>
						Delete Restaurant
					</Button>
				</Col>
				
			</Row>
			<Row className='justify-content-center'>
				<Col md={10} sm={12}>
					<ItemForm restaurant={id} addItem={addItem} />
				</Col>
			</Row>
			<Row className='justify-content-center pt-5'>
				<Col md={4}>
					<h3 className='text-center border-bottom'>
						{currentWorkDay}
					</h3>
				</Col>
				
			</Row>
			<br/>

			{ isFetching ? 
				<Loading/> : 
				itemList.length === 0 ?
				<Fragment>
					<h6>No items in this inventory. Add some above.</h6>
				</Fragment> :
				<Fragment>
				{lineItems.length > 0 ? 
					<Fragment>
						<Row className='justify-content-center pt-5'>
							<Col>
								<h5 className='text-center'>Line</h5>
							</Col>
						</Row>
						<Row>
							<Col md={3}>
								Name (units)
							</Col>
							<Col md={2}>
								Cases
							</Col>
							<Col md={2}>
								On Hand
							</Col>
							<Col md={2}>
								Needs
							</Col>
							<Col md={2}>
								To Be Prepped
							</Col>
						</Row>

						<Row className='no-gutters'>
							<Col>

							{lineItems.map( item => {

								return(
									<Item 
										key={item.id}
										restaurant={id}
										item={item}
										fetchRecords={fetchRecords}
										recordList={recordList}
										deleteItem={deleteItem}
										currentWorkDay={currentWorkDay}
										updateRecord={updateRecord} />
								)
							})}
							</Col>
						</Row>
						</Fragment>
						:
					<div/>}
					
					{miscItems.length > 0 ?
						<Fragment>
							<Row className='justify-content-center pt-5'>
								<Col>
									<h5 className='text-center'>Misc</h5>
								</Col>
							</Row>
							<Row>
								<Col md={3}>
									Name (units)
								</Col>
								<Col md={2}>
									Cases
								</Col>
								<Col md={2}>
									On Hand
								</Col>
								<Col md={2}>
									Needs
								</Col>
								<Col md={2}>
									To Be Prepped
								</Col>
							</Row>
							<Row className='no-gutters'>
								<Col>

								{miscItems.map( item => {

									return(
										<Item 
											key={item.id}
											restaurant={id}
											item={item}
											fetchRecords={fetchRecords}
											recordList={recordList}
											deleteItem={deleteItem}
											currentWorkDay={currentWorkDay}
											updateRecord={updateRecord} />
									)
								})}
								</Col>
							</Row>
						</Fragment> :

						<div/>}

						{meatItems.length > 0 ?
						<Fragment>
							<Row className='justify-content-center pt-5'>
								<Col>
									<h5 className='text-center'>Misc</h5>
								</Col>
							</Row>
							<Row>
								<Col md={3}>
									Name (units)
								</Col>
								<Col md={2}>
									Cases
								</Col>
								<Col md={2}>
									Marinated cases
								</Col>
								<Col md={2}>
									Separated pans
								</Col>
							</Row>
							<Row className='no-gutters'>
								<Col>

								{meatItems.map( item => {

									return(
										<MeatItem 
											key={item.id}
											restaurant={id}
											item={item}
											fetchRecords={fetchRecords}
											recordList={recordList}
											deleteItem={deleteItem}
											currentWorkDay={currentWorkDay}
											updateRecord={updateRecord} />
									)
								})}
								</Col>
							</Row>
						</Fragment> :

						<div/>}
				</Fragment>
				}

		</Fragment>
			
	)
}

const mapStateToProps = state => 
({
	items: state.items,
	weeks: state.weeks,
	records: state.records
});


export default connect(
	mapStateToProps,
	{ 
		deleteRestaurant, 
		fetchItems, 
		addItem, 
		deleteItem, 
		fetchRecords, 
		clearFetchedItems,
		updateRecord
	}
)(Restaurant)