import React from 'react';
import Categories from './Categories';

/**
 * Sidebar component
 *
 * @param {Object} props
 */

export default function TodoSidebar(props) {
    let visibility = props.visibleSidebar === 'true' ? '' :  'hidden',
        rootLevel = {rootLevel:true};
    return (
        <aside className={visibility}>
            <button onClick={e => props.addCategory(e, rootLevel)}>Add Category</button>

            <div className="categories-container">
                <Categories categoryData={props} />
            </div>
        </aside>
    )
}
