import React, { Fragment, useState, useEffect } from 'react';
import Loading from './Loading';
import Item from './Item';
import MeatItem from './MeatItem';
import SauceAddOnItem from './SauceAddOnItem';
import ItemForm from './ItemForm';
import RecordForm from './RecordForm';
import { connect } from 'react-redux';

import { CSSTransition } from 'react-transition-group';

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
	hideLinks,
	toggleHideLinks,
	items: { itemList, isFetching },
	weeks: { currentWorkDay, previousWorkDay },
	records: { recordList },
	users: { currentUser }
}) => {	

	const { id } = useParams();
	const history = useHistory();

	const [showForm, setShowForm] = useState(false);
	const [showButton, setShowButton] = useState(true);

	useEffect(() => {
		fetchItems(id)

	},[ id ])

	let lineItems = itemList.filter(item => item.category == 'Line')
	let miscItems = itemList.filter(item => item.category == 'Misc')
	let meatItems = itemList.filter(item => item.category == 'Meat')
	let sauceAddOnItems = itemList.filter(item => item.category == 'Sauces/Add-ons')


	return (
		<Fragment>
			<Row>
				<Col className='clearfix'>
					<Button size='sm' className='float-left' onClick={()=>{toggleHideLinks(true)}}>
						Go Back
					</Button>
				</Col>
			</Row>
			<Row className='justify-content-center py-1'>
				

				{showButton && currentUser && (
					<Col xs={4}>

						<Button 
							onClick={()=> setShowForm(true)}
						>
							Add New Item
						</Button>
					</Col>
				)}
				
				<Col md={10}>
					<CSSTransition
						in={showForm}
						timeout={500}
						classNames='slide'
						unmountOnExit
						onEnter={()=> setShowButton(false)}
						onExited={()=> setShowButton(true)}
					>
						<ItemForm 
							restaurant={id} 
							addItem={addItem}
							setShowForm={setShowForm}
							currentUser={currentUser} 
						/>
					</CSSTransition>
					
				</Col>
			</Row>
			<Row className='justify-content-center pt-5'>
				<Col xs={9} md={3}>
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
						<Row className='pt-5'>
							<Col>
								<h5 className='text-center section-name'>Line</h5>
							</Col>
						</Row>
						<Col className='d-none d-md-block'>
							<Row className='text-center'>
								<Col md={3}>
									Name (units)
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
								<Col md={2}>
									Cases
								</Col>
							</Row>
						</Col>

						<Row className='no-gutters'>
							<Col className='text-center'>

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
											previousWorkDay={previousWorkDay}
											updateRecord={updateRecord}
											currentUser={currentUser} />
									)
								})}
							</Col>
						</Row>
						</Fragment>
						:
					<div/>}
					
					{miscItems.length > 0 ?
						<Fragment>
							<Row className='pt-5'>
								<Col>
									<h5 className='text-center section-name'>Misc</h5>
								</Col>
							</Row>
							<Col className='d-none d-md-block'>
								<Row className='text-center'>
									<Col md={3}>
										Name (units)
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
									<Col md={2}>
										Cases
									</Col>
								</Row>
							</Col>
							<Row className='no-gutters'>
								<Col className='text-center'>

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
												previousWorkDay={previousWorkDay}
												updateRecord={updateRecord}
												currentUser={currentUser} />
										)
									})}
								</Col>
							</Row>
						</Fragment> :

						<div/>}
						{sauceAddOnItems.length > 0 ?
							<Fragment>
								<Row className='justify-content-center pt-5'>
									<Col>
										<h5 className='text-center section-name'>Sauces/Add-ons</h5>
									</Col>
								</Row>
								<Col className='d-none d-md-block'>
									<Row className='text-center'>
										<Col md={3}>
											Name (units)
										</Col>
										
										<Col md={{span: 3, offset: 3}}>
											On Hand
										</Col>
									</Row>
								</Col>
								
								<Row className='no-gutters'>
									<Col className='text-center'>

										{sauceAddOnItems.map( item => {

											return(
												<SauceAddOnItem 
													key={item.id}
													restaurant={id}
													item={item}
													fetchRecords={fetchRecords}
													recordList={recordList}
													deleteItem={deleteItem}
													currentWorkDay={currentWorkDay}
													previousWorkDay={previousWorkDay}
													updateRecord={updateRecord}
													currentUser={currentUser} />
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
										<h5 className='text-center section-name'>Meat</h5>
									</Col>
								</Row>
								<Col className='d-none d-md-block'>
									<Row className='text-center'>
										<Col md={3}>
											Name (units)
										</Col>
										
										<Col md={3}>
											Marinated cases
										</Col>
										<Col md={3}>
											Separated pans
										</Col>
										<Col md={3}>
											Non-marinated Cases
										</Col>
									</Row>
								</Col>
								
								<Row className='no-gutters'>
									<Col className='text-center'>

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
													previousWorkDay={previousWorkDay}
													updateRecord={updateRecord}
													currentUser={currentUser} />
											)
										})}
									</Col>
								</Row>
							</Fragment> :

						<div/>
					}
					{ currentUser && (
						<Row className='py-5'>
							<Col xs={{span:10, offset: 1}} md={{span: 4, offset: 4}}>
								<Button 
									variant='danger' 
									onClick={()=> {deleteRestaurant(id, history)}} 
									block
								>
									Delete Restaurant
								</Button>
							</Col>
						</Row>
					)}

				</Fragment>
				}

		</Fragment>
			
	)
}

const mapStateToProps = state => 
({
	items: state.items,
	weeks: state.weeks,
	records: state.records,
	users: state.users
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