import React from 'react';
import renderChildrenHOC from '../hoc/renderChild';

/**
 * Categories component
 */
class Categories extends React.Component {

    /**
     * Add class on corresponding selected category, remove from others
     *
     * @param {String} uniqueId - category id
     */
    toggleActiveLi = (uniqueId) => () => {
        let {modifyActiveCategory} = this.props;
        modifyActiveCategory(uniqueId);
    };

    render() {
        let {categoryList, addNewCategory, toggleRemoveModal} = this.props,
            {props} = this,
            RenderChildren = renderChildrenHOC(Categories, "subcategory-container");

        return (
            <ul>
                {categoryList.map((item, index) => {
                    return (
                        <li key={item.name + index + '-' + item.uniqueId} className={"category-item " + (item.activeCategory ? 'active-li' : '')} data-unique-key={item.uniqueId}>
                            <div>
                                <button onClick={(e)=> toggleRemoveModal(item.uniqueId)} className="remove-category">-</button>

                                <div className="category-text-row" onClick={this.toggleActiveLi(item.uniqueId)}>
                                    <span>{item.uniqKey}</span> &nbsp;
                                    {item.name}
                                </div>
                                <button onClick={(e)=> addNewCategory(item.uniqueId)} className="add-subcategories">+</button>
                            </div>
                            <RenderChildren item={item} defaultProps={props} />
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default Categories;
