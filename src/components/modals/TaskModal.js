import {Button, Modal, Form} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, {useState} from 'react';

function TaskModal(props) {

    let {addTask, openedTaskModal, toggleNewTaskModal} = props;
    const [validated, setValidated] = useState(false),
        [name, setName] = useState(false),
        [id, setId] = useState(false),
        [dod, setDod] = useState(false),
        [description, setDescription] = useState(false),
        [startDate, setStartDate] = useState(false),
        [endDate, setEndDate] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() !== false) {
            addTask({
                name,
                id,
                dod,
                description,
                startDate,
                endDate
            });
            props.toggleNewTaskModal();
        }
        setValidated(true);
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
        <Modal show={openedTaskModal} className={"add-new-task-modal"}>
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

                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Save Task
                        </Button>

                        <Button variant="secondary" onClick={toggleNewTaskModal}>
                            Close Modal
                        </Button>
                    </Modal.Footer>

                </Form>
            </Modal.Body>
        </Modal>
    );
}


export default TaskModal;