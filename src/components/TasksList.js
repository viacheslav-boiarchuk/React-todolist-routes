import React from 'react';
import Task from "./Task";
import _ from 'lodash';

/**
 * TasksList component
 */

export default function TasksList(props) {

    let {categoryTasksList} = props.categoryData,
        {toggleDateModal} = props;

    return (
        <>
            {!(_.isEmpty(categoryTasksList)) ?
                <ul>
                    {categoryTasksList.map((item, index) => {
                        return (
                            <Task
                                toggleDateModal={toggleDateModal}
                                task={item}
                                key={index+'__'+item.name}
                            />
                        )
                    })}
                </ul>
                : null
            }
        </>

    )
}
