import React from 'react';
import TasksList from './TasksList';

/**
 * TasksContainer component
 *
 * @param {Object} props
 */

export default function TasksContainer(props) {
    return (
        <div className="todolist-container">
            <button onClick={props.addTask}>Add Task</button>

            <div className="todolist-inner-container">
                <TasksList categoryData={props} />
            </div>
        </div>
    )
}
