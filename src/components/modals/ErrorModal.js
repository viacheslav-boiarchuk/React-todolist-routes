import {Button, Modal} from "react-bootstrap";
import React from 'react';

function ErrorModal(props) {
    let {openedErrorModal, toggleErrorModal} = props;
    return (
        <>
            <Modal show={openedErrorModal} onHide={toggleErrorModal}>
                <Modal.Body>Please select category!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleErrorModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ErrorModal;