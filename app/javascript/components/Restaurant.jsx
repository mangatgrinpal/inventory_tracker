import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Moment from 'react-moment'


import { deleteRestaurant } from '../actions/restaurants';
import { fetchItems, addItem, deleteItem } from '../actions/items';

import { useHistory, useParams } from 'react-router-dom';

import Loading from './Loading';
import Item from './Item';
import ItemForm from './ItemForm';
import DateRange from './DateRange';
import RecordForm from './RecordForm';


import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const Restaurant = ({ 
	deleteRestaurant, 
	fetchItems,
	addItem,
	deleteItem,
	items: { itemList, isFetching }
}) => {	

	const { id } = useParams();
	const history = useHistory();

	useEffect(() => {
		fetchItems(id)

	},[ id ])
	

	return (
		<Fragment>

			<Button variant='danger' onClick={()=> {deleteRestaurant(id, history)}}>
				Delete Restaurant
			</Button>

			{ isFetching ? 
				<Loading/> : 
				itemList.length == 0 ?
				<Fragment>
					<h1>No items yet</h1>
					<ItemForm restaurant={id} addItem={addItem} />
				</Fragment> :
				<Fragment>

					<Row className='no-gutters'>
						<Col md={2}>
							<ListGroup>
								<ListGroup.Item>
									Name (units)
								</ListGroup.Item>
								{itemList.map( item => {
									return(
										<Item 
											key={item.id}
											restaurant={id}
											item={item}
											deleteItem={deleteItem} />
									)
								})}
								<ListGroup.Item>
									<ItemForm restaurant={id} addItem={addItem} />
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col md={2}>
							<ListGroup>
								<ListGroup.Item>
									<DateRange weeks={0} />
								</ListGroup.Item>
								<ListGroup.Item>
									<RecordForm/>
								</ListGroup.Item>
							</ListGroup>
						</Col>
						{/*
						<Col md={2}>
							<ListGroup>
								<ListGroup.Item>
									<DateRange weeks={2} />
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col md={2}>
							<ListGroup>
								<ListGroup.Item>
									<DateRange weeks={1} />
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col md={2}>
							<ListGroup>
								<ListGroup.Item>
									
									<DateRange weeks={0} />
								</ListGroup.Item>
							</ListGroup>
						</Col>
					*/}

					</Row>
				</Fragment>}
		</Fragment>
			
	)
}

const mapStateToProps = state => 
({
	items: state.items
});


export default connect(
	mapStateToProps,
	{ deleteRestaurant, fetchItems, addItem, deleteItem }
)(Restaurant)