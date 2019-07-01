import React from 'react';
import renderChildrenHOC from "../hoc/renderChild";
import Tasks from "./Tasks";
import {getActiveCategory} from '../helpers/helpers';
import _ from 'lodash';

/**
 * TasksList component
 */

class TasksList extends React.Component {

    /**
     * constructor
     */
    constructor(...args) {
        super(...args);

        this.state = {
            activeCategories: {}
        };
    }

    componentWillReceiveProps() {
        let {categories} = this.props.categoryData;
        getActiveCategory(categories, {}, this.renderTasks);
    }

    renderTasks = (data) => {
        this.setState({
            activeCategories: data
        })
    };

    render() {
        let {props} = this,
            {activeCategories} = this.state,
            RenderChildren = renderChildrenHOC(TasksList, "todolist-inner-container");
        return (
            <ul>
                {!(_.isEmpty(activeCategories) || !activeCategories.activeCategory) ?
                    <>
                        <Tasks tasksList={activeCategories} />
                        {activeCategories.categories.map((item, index) => {
                            return (
                                <li key={item.name + index + '-' + item.uniqueId} >
                                    <ul>
                                        <Tasks tasksList={item} />
                                    </ul>
                                    <RenderChildren item={item} type={'categories'} tempProps={props} />
                                </li>
                            )
                        })}
                    </>
                    : null
                }
            </ul>
        );
    }
}

export default TasksList;
