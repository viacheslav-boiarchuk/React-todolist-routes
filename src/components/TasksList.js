import React from 'react';
import Task from "./Task";
import _ from 'lodash';

/**
 * TasksList component
 */

export default function TasksList(props) {

    let {categoryTasksList} = props.categoryData;

    return (
        <>
            {!(_.isEmpty(categoryTasksList)) ?
                <ul>
                    {categoryTasksList.map((item, index) => {
                        return (
                            <Task task={item} key={index+'__'+item.name} />
                        )
                    })}
                </ul>
                : null
            }
        </>

    )
}
