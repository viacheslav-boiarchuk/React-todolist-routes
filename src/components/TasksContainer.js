import React from 'react';
import TasksList from './TasksList';
import _ from 'lodash';
import {checkActiveCategory} from '../helpers/methods';

/**
 * TasksContainer component
 *
 * @param {Object} props
 */

export default function TasksContainer(props) {

    let {categoryList} = props.state.categories,
        activeCategoryData  = checkActiveCategory([...categoryList], true);

    const callCategoryHelper = () => {
        let {categoryList} = props.state.categories;
        let activeCategory = checkActiveCategory([...categoryList]);

        if (_.isEmpty(activeCategory)) {
            props.toggleErrorModal();
        }
        else {
            props.toggleNewTaskModal();
        }
    };

    return (
        <div className="todolist-container">
            <button onClick={callCategoryHelper}>Add Task</button>

            <div className="todolist-inner-container">
                <TasksList categoryData={activeCategoryData} />
            </div>
        </div>
    )
}
