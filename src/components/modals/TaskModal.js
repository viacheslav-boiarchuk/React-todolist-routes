import {Button, Modal, Form} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, {useState} from 'react';

function TaskModal(props) {
    const [validated, setValidated] = useState(false),
        [name, setName] = useState(false),
        [id, setId] = useState(false),
        [dod, setDod] = useState(false),
        [description, setDescription] = useState(false),
        [startDate, setStartDate] = useState(false),
        [endDate, setEndDate] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        if (form.checkValidity()) {
            console.log(name);
            console.log(id);
            console.log(dod);
            console.log(description);
            console.log(startDate);
            console.log(endDate);
            setValidated(true);
        }
    };

    const handleChangeStart = value => {
        setStartDate(value);
    };

    const handleChangeEnd = value => {
        setEndDate(value);
    };

    const handleName = event => {
        setName(event.target.value);
    };

    const handleId = event => {
        setId(event.target.value);
    };

    const handleDod = event => {
        setDod(event.target.value);
    };

    const handleDescription = event => {
        setDescription(event.target.value);
    };

    return (
        <>
            <Modal show={props.openedTaskModalModal}>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="taskForm.TaskName">
                            <Form.Control type="text" placeholder="Name" onChange={handleName} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide Task Name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <br/>

                        <Form.Group controlId="taskForm.TaskGroup">
                            <Form.Control type="text" placeholder="ID" onChange={handleId} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide Task ID.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <br/>

                        <Form.Group controlId="taskForm.DefinitionGroup">
                            <Form.Control type="text" placeholder="Definition of Done" onChange={handleDod} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide Definition of Done.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <br/>

                        <Form.Group controlId="taskForm.DescriptionGroup">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={handleDescription} />
                        </Form.Group>
                        <br/>

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

                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default TaskModal;