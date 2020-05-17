import React, { Fragment, useEffect, useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button';



const ConfirmationModal = (props) => {

	return (
		<Modal
			{...props}
			size='lg'
			centered
			id='confirmation-modal'
		>
			<Modal.Header closeButton>
				<Modal.Title>
					Confirmation
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>Are you sure you want to delete? This cannot be un-done.</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
				<Button onClick={()=>{props.deleteRestaurant(props.id, props.history)}} variant='danger'>Delete</Button>
			</Modal.Footer>

		</Modal>
	)
}

export default ConfirmationModal