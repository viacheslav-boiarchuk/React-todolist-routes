import * as ct from '../actions/constants';
import {
    addCategory,
    addDataToCategory,
    checkActiveCategory,
    updateTaskDate
} from '../helpers/methods';

const initialState = {
    categoryList: [],
    removeCategoryID: ''
};

export const categories = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ct.ADD_CATEGORIES:
            let updatedDataWithAddedItem = addCategory(payload, [...state.categoryList]),
                resultArray = updatedDataWithAddedItem ? updatedDataWithAddedItem : [...state.categoryList];

            return {
                ...state,
                categoryList: resultArray
            };

        case ct.MODIFY_ACTIVE_CATEGORY:
            let updatedDataWithModifiedItem = addDataToCategory({type: 'activateCategory'}, payload, [...state.categoryList]);

            return {
                ...state,
                categoryList: updatedDataWithModifiedItem
            };

        case ct.REMOVE_CATEGORY:
            let categoryId = state.removeCategoryID,
                updatedDataWithRemovedItem = addDataToCategory({type: 'removeCategory'}, categoryId, [...state.categoryList]);

            return {
                ...state,
                categoryList: updatedDataWithRemovedItem,
                removeCategoryID: ''
            };

        case ct.ADD_TASK:
            let activeCategory = checkActiveCategory([...state.categoryList]),
                updateDataWithNewTask = addDataToCategory({type: 'addTask', data: payload}, activeCategory, [...state.categoryList]);

            return {
                ...state,
                categoryList: updateDataWithNewTask
            };

        case ct.TOGGLE_REMOVE_MODAL:
            let removeIdExist = state.removeCategoryID ? '': payload;

            return {
                ...state,
                removeCategoryID: removeIdExist
            };

        case ct.CHANGE_TASK_DATE:
            let updatedDataWithNewTaskDate = updateTaskDate(payload, [...state.categoryList]);
            console.log(updatedDataWithNewTaskDate);

            return {
                ...state
            };

        default:
            return state;
    }
};