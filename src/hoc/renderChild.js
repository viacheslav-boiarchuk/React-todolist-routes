import React from 'react';

/**
 * HOC which update data for categories and tasks components and render them
 *
 * @param {Object} Component
 * @param {String} componentClassName
 *
 * @return {Object} return updated Component
 */

export default function renderChildrenHOC(Component, componentClassName) {
    return class Wrapper extends React.Component {
        render() {
            let {item, tempProps} = this.props;
            if (item.categories.length > 0) {
                let updatedProps = Object.assign({}, tempProps.categoryData);
                updatedProps.categories = item.categories;

                return (
                    <div className={componentClassName}>
                        <Component categoryData={updatedProps} />
                    </div>
                )
            }
            else {
                return null
            }
        }
    }
}
