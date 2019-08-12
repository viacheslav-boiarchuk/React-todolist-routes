import React from 'react';
import Categories from './Categories';

/**
 * Sidebar component
 *
 * @param {Object} props
 */

export default function TodoSidebar(props) {
    let visibility = props.isSidebarVisible ? '' :  'hidden',
        {categoryListState} = props;

    return (
        <aside className={visibility}>
            <button onClick={e => props.addCategories({rootLevel:true})}>Add Category</button>

            <div className="categories-container">
                <Categories
                    categoryList={categoryListState}
                    addNewCategory={props.addCategories}
                    removeCategory={props.removeCategory}
                    modifyActiveCategory = {props.modifyActiveCategory}
                    toggleRemoveModal = {props.toggleRemoveModal}
                />
            </div>
        </aside>
    )
}
