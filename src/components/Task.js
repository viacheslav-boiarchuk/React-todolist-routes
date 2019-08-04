import React from 'react';
import {checkTaskDuration} from '../helpers/methods';

/**
 * Task component
 *
 * @param {Object} props
 */

export default function Task(props) {
    let {task, taskIndex, toggleDateModal} = props,
        keyName = task.name + taskIndex,
        startDate = new Date(task.startDate).toDateString(),
        endDate = new Date(task.endDate).toDateString(),
        dateExpired = checkTaskDuration(endDate),
        dateExpiredClass = !dateExpired ? 'expired' : '';

    return (
        <li className='task-item' key={keyName}>
            <h3>{task.name}</h3>
            <p>ID: <strong>{task.id}</strong></p>
            <p>STATUS: <span className='uppercase-text DOD-line'>{task.dod}</span></p>
            <blockquote>
                {task.description}
            </blockquote>
            <p>PERIOD: <span className={dateExpiredClass}><strong>{startDate}</strong> - <strong>{endDate}</strong></span></p>
            {!dateExpired ?
                <button onClick={e => toggleDateModal(task.taskUniqueID)}>Reactivate Data</button>
            : null}
        </li>
    )
};