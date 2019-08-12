import { createSelector } from 'reselect'

export const rootCategoriesState = createSelector(
    state => state.categories,
    categories => categories
);

export const categoryListState = createSelector(
    rootCategoriesState,
    categories => categories.categoryList
);