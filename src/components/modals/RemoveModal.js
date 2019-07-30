import {Button, Modal} from "react-bootstrap";
import React from 'react';

function RemoveModal(props) {
    let {openedRemoveModal, removeCategory, toggleRemoveModal} = props;
    return (
        <>
            <Modal show={openedRemoveModal} onHide={toggleRemoveModal}>
                <Modal.Body>Are you sure you want to delete category?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleRemoveModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={removeCategory}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RemoveModal;