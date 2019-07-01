import React from 'react';
import {addDataToCategory} from '../helpers/helpers';
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
        let {categoryData} = this.props,
            resultArr = addDataToCategory({type: 'activateCategory'}, uniqueId, categoryData.getCategories());

        categoryData.modifyActiveCategory(resultArr);
    };

    render() {
        let {categoryData} = this.props,
            {props} = this,
            RenderChildren = renderChildrenHOC(Categories, "subcategory-container");
        return (
            <ul>
                {categoryData.categories.map((item, index) => {
                    return (
                        <li key={item.name + index + '-' + item.uniqueId} className={"category-item " + (item.activeCategory ? 'active-li' : '')} data-unique-key={item.uniqueId}>
                            <div>
                                <div className="category-text-row" onClick={this.toggleActiveLi(item.uniqueId)}>
                                    <span>{item.uniqKey}</span> &nbsp;
                                    {item.name}
                                </div>
                                <button onClick={(e)=> categoryData.addCategory(e, item.uniqueId)} className="add-subcategories">+</button>
                            </div>
                            <RenderChildren item={item} tempProps={props} />
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default Categories;
