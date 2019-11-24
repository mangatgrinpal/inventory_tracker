import React, { Fragment, useState, useEffect } from 'react';
import Loading from './Loading';
import Item from './Item';
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

		return () => {
			clearFetchedItems()
		}


	},[ id ])



	return (
		<Fragment>
			<Row>
				<Button variant='danger' onClick={()=> {deleteRestaurant(id, history)}}>
					Delete Restaurant
				</Button>
			</Row>
			<br/>

			{ isFetching ? 
				<Loading/> : 
				itemList.length === 0 ?
				<Fragment>
					<h1>No items yet</h1>
					<ItemForm restaurant={id} addItem={addItem} />
				</Fragment> :
				<Fragment>
					<Row className='justify-content-center'>
						<Col md={4}>
							<h4>
								{currentWorkDay}
							</h4>
						</Col>
					</Row>
					<Row>
						<Col md={2}>
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
						{itemList.map( item => {

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
					<Row>
						<Col md={2}>
							<ItemForm restaurant={id} addItem={addItem} />
						</Col>
					</Row>
				</Fragment>}
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