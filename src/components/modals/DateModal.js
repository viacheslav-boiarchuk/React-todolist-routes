import {Button, Modal, Form} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, {useState} from 'react';

function DateModal(props) {

    let {openedDateModal, toggleDateModal, activeTaskID, changeTaskDate} = props;
    const [validated, setValidated] = useState(false),
        [startDate, setStartDate] = useState(false),
        [endDate, setEndDate] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() !== false) {
            changeTaskDate({
                startDate,
                endDate,
                activeTaskID
            });
            props.toggleDateModal();
        }
        setValidated(true);
    };

    const handleChangeStart = value => {
        setStartDate(value);
    };

    const handleChangeEnd = value => {
        setEndDate(value);
    };

    return (
        <Modal show={openedDateModal} className={"data-modal"}>
            <Modal.Body>

                Please, reactivate task duration.

                <Form noValidate validated={validated} onSubmit={handleSubmit}>

                    <div className="calendar-container">
                        <Form.Group controlId="taskForm.DateFromGroup">
                            <Form.Label>From</Form.Label>
                            <br/>
                            <DatePicker
                                selected={startDate}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                onChange={handleChangeStart}
                            />
                        </Form.Group>

                        <Form.Group controlId="taskForm.DateToGroup">
                            <Form.Label>To</Form.Label>
                            <br/>
                            <DatePicker
                                selected={endDate}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                onChange={handleChangeEnd}
                                minDate={startDate}
                                required
                            />
                        </Form.Group>
                    </div>
                    <br/>

                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Save Task
                        </Button>

                        <Button variant="secondary" onClick={toggleDateModal}>
                            Close Modal
                        </Button>
                    </Modal.Footer>

                </Form>
            </Modal.Body>
        </Modal>
    );
}


export default DateModal;