import React, { Fragment, useState, useEffect } from 'react';
import Loading from './Loading';
import Item from './Item';
import MeatItem from './MeatItem';
import SauceAddOnItem from './SauceAddOnItem';
import ItemForm from './ItemForm';
import RecordForm from './RecordForm';
import AddItemButton from './AddItemButton';
import { connect } from 'react-redux';

import { CSSTransition } from 'react-transition-group';

import { deleteRestaurant } from '../actions/restaurants';
import { 
	fetchItems,
	addItem,
	deleteItem,
	setItemFormVisibility,
	clearFetchedItems,
	updateRecord
} from '../actions/items';
import { fetchRecords } from '../actions/records';

import { useHistory, useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Restaurant = ({ 
	deleteRestaurant, 
	fetchItems,
	fetchRecords,
	addItem,
	deleteItem,
	clearFetchedItems,
	updateRecord,
	setItemFormVisibility,
	restaurantLinksVisible,
	setRestaurantLinksVisibility,
	items: { itemList, isFetching, itemFormVisible },
	weeks: { currentWorkDay, previousWorkDay },
	records: { recordList },
	users: { currentUser }
}) => {	

	const { id } = useParams();
	const history = useHistory();

	useEffect(() => {

		fetchItems(id)

	},[ id ])

	let lineItems = itemList.filter(item => item.category == 'Line')
	let miscItems = itemList.filter(item => item.category == 'Misc')
	let meatItems = itemList.filter(item => item.category == 'Meat')
	let sauceAddOnItems = itemList.filter(item => item.category == 'Sauces/Add-ons')


	return (
		<Fragment>
			<Container>
				<Row>
					<Col className='clearfix'>
					{restaurantLinksVisible ? 
						<FontAwesomeIcon 
							className='clickable-icon' 
							title='Hide restaurants'
							alt='Hide restaurants'
							icon={['far','arrow-alt-circle-up']} 
							size='2x' 
							onClick={()=>{setRestaurantLinksVisibility(false)}}/>
						:
						<FontAwesomeIcon 
							className='clickable-icon' 
							title='Go back'
							alt='Go back'
							icon={['far','arrow-alt-circle-left']} 
							size='2x' 
							onClick={()=>{setRestaurantLinksVisibility(true)}}/>	
						}
					</Col>
				</Row>
				<Row className='justify-content-center pt-5'>
					<Col xs={9} md={3}>
						<h3 className='text-center border-bottom'>
							{currentWorkDay}
						</h3>
					</Col>
				</Row>

				{ isFetching ? 
					<Loading/> : 
					itemList.length === 0 ?
					<Fragment>
						<h6>No items in this inventory. Add some above.</h6>
					</Fragment> :
					<Fragment>
					{lineItems.length > 0 ? 
						<Fragment>
							<Row className='pt-1'>
								<Col>
									<h5 className='text-center section-name py-4'>Line</h5>
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
										To be Prepped
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
							<AddItemButton setItemFormVisibility={ setItemFormVisibility } />
						</Fragment>
							:
						<div/>}
						
						{miscItems.length > 0 ?
							<Fragment>
								<Row className='pt-5'>
									<Col>
										<h5 className='text-center section-name py-4'>Misc</h5>
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
											To be Prepped
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
								<AddItemButton setItemFormVisibility={setItemFormVisibility}/>
							</Fragment> :

							<div/>}
							{sauceAddOnItems.length > 0 ?
								<Fragment>
									<Row className='justify-content-center pt-5'>
										<Col>
											<h5 className='text-center section-name py-4'>Sauces/Add-ons</h5>
										</Col>
									</Row>
									<Col className='d-none d-md-block'>
										<Row className='text-center'>
											<Col md={3}>
												Name (units)
											</Col>
											
											<Col md={{span: 3, offset: 1}}>
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
									<AddItemButton setItemFormVisibility={setItemFormVisibility}/>
								</Fragment> :

							<div/>}

							{meatItems.length > 0 ?
								<Fragment>
									<Row className='justify-content-center pt-5'>
										<Col>
											<h5 className='text-center section-name py-4'>Meat</h5>
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
												Non-marinated cases
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
									<AddItemButton setItemFormVisibility={setItemFormVisibility}/>
								</Fragment> :

							<div/>
						}
						

					</Fragment>
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

			</Container>
			<CSSTransition
					in={itemFormVisible}
					timeout={600}
					unmountOnExit
					classNames='slide-out'
				>
				<Col xs={12} md={{span: 6, offset: 6}} className='form-panel-container fixed-top pt-2'>

					<FontAwesomeIcon 
						className='clickable-icon' 
						size='2x'
						title='Close'
						alt='Close'
						icon={['far', 'times-circle']} 
						onClick={()=>{setItemFormVisibility(false)}}
					/>

					<ItemForm 
						restaurant={id} 
						addItem={addItem}
						setItemFormVisibility={setItemFormVisibility}
						currentUser={currentUser} 
					/>
				</Col>
			</CSSTransition>
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
		setItemFormVisibility, 
		fetchRecords, 
		clearFetchedItems,
		updateRecord
	}
)(Restaurant)