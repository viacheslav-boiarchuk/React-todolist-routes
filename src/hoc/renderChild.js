import React from 'react';

/**
 * HOC which update data for categoryList and tasks components and render them
 *
 * @param {Object} Component
 * @param {String} componentClassName
 *
 * @return {Object} return updated Component
 */

export default function renderChildrenHOC(Component, componentClassName) {
    return class Wrapper extends React.Component {
        render() {
            let {item, defaultProps} = this.props;
            if (item.categoryList.length > 0) {
                let updatedProps = Object.assign({}, defaultProps);
                updatedProps.categoryList = item.categoryList;

                return (
                    <div className={componentClassName}>
                        <Component {...updatedProps} />
                    </div>
                )
            }
            else {
                return null
            }
        }
    }
}
