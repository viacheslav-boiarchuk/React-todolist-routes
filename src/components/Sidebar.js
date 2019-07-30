import React from 'react';
import Categories from './Categories';

/**
 * Sidebar component
 *
 * @param {Object} props
 */

export default function TodoSidebar(props) {
    let visibility = props.common.isSidebarVisible ? '' :  'hidden',
        {categoryList} = props;

    return (
        <aside className={visibility}>
            <button onClick={e => props.addCategories({rootLevel:true})}>Add Category</button>

            <div className="categories-container">
                <Categories
                    categoryList={categoryList}
                    addNewCategory={props.addCategories}
                    removeCategory={props.removeCategory}
                    modifyActiveCategory = {props.modifyActiveCategory}
                    toggleRemoveModal = {props.toggleRemoveModal}
                />
            </div>
        </aside>
    )
}
