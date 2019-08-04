import {Button, Modal} from "react-bootstrap";
import React from 'react';

function RemoveModal(props) {
    let {removeCategory, toggleRemoveModal, openedRemoveModal} = props;
    return (
        <Modal show={openedRemoveModal} onHide={toggleRemoveModal}>
            <Modal.Body>Are you sure you want to delete category?</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={removeCategory}>
                    Save Changes
                </Button>
                <Button variant="secondary" onClick={toggleRemoveModal}>
                    Close Modal
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RemoveModal;