import React from 'react';
import _ from 'lodash';

/**
 * Tasks component
 *
 * @param {Object} props
 */

export default function Tasks(props) {
    let {tasksList} = props;
    return (
        <>
            {!(_.isEmpty(tasksList.categoryTasksList)) ?
                <>
                    {tasksList.categoryTasksList.map((item, index) => {
                        return (
                            <li key={'tasks-' + index} >
                                {item}
                            </li>
                        )
                    })}
                </>
                : null
            }
        </>
    )
};