import * as ct from '../actions/constants';
import Immutable from 'immutable';

import {
    addCategory,
    addDataToCategory,
    checkActiveCategory,
    updateTaskDate
} from '../helpers/methods';

const initialState = Immutable.fromJS({
    categoryList: [],
    removeCategoryID: ''
});

export const categories = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ct.ADD_CATEGORIES:
            let addCatCategoryList= state.get('categoryList'),
                updatedDataWithAddedItem = addCategory(payload, [...addCatCategoryList]),
                resultArray = updatedDataWithAddedItem ? updatedDataWithAddedItem : [...addCatCategoryList];

            return state
                .set('categoryList', resultArray);

        case ct.MODIFY_ACTIVE_CATEGORY:
            let modifyCatCategoryList = state.get('categoryList'),
                updatedDataWithModifiedItem = addDataToCategory(
                {type: 'activateCategory'},
                payload, [...modifyCatCategoryList]);

            return state
                .set('categoryList', updatedDataWithModifiedItem);

        case ct.REMOVE_CATEGORY:
            let removeCatCategoryList = state.get('categoryList'),
                categoryId = state.removeCategoryID,
                updatedDataWithRemovedItem = addDataToCategory(
                    {type: 'removeCategory'},
                    categoryId, [...removeCatCategoryList]);

            return state
                .set('categoryList', updatedDataWithRemovedItem)
                .set('removeCategoryID', '');

        case ct.ADD_TASK:
            let addTaskCategoryList = state.get('categoryList'),
                activeCategory = checkActiveCategory([...addTaskCategoryList]),
                updateDataWithNewTask = addDataToCategory(
                    {type: 'addTask', data: payload},
                    activeCategory, [...addTaskCategoryList]);

            return state
                .set('categoryList', updateDataWithNewTask);

        case ct.TOGGLE_REMOVE_MODAL:
            let removeIdExist = state.removeCategoryID ? '': payload;

            return state
                .set('removeCategoryID', removeIdExist);

        case ct.CHANGE_TASK_DATE:
            let changeTaskCategoryList = state.get('categoryList'),
                updatedDataWithNewTaskDate = updateTaskDate(payload, [...changeTaskCategoryList]);

            return state
                .set('categoryList', updatedDataWithNewTaskDate);

        default:
            return state;
    }
};