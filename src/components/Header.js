import React from 'react';

/**
 * Header component
 *
 * @param {Object} props
 */

export default function TodoHeader(props) {
    let text = props.visibleSidebar === 'true' ? 'Hide' : 'Show';
    return (
        <header>
            <button onClick={props.toggleSidebar}>{text} Sidebar</button>
        </header>
    )
};
