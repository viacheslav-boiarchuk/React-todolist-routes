import * as ct from '../actions/constants';
import {addCategory, addDataToCategory, addTask} from '../helpers/methods';

const initialState = {
    categoryList: [],
    removeCategoryID: ''
};

export const categories = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ct.ADD_CATEGORIES:
            console.log(payload);

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
            let categoryId = state.removeCategoryID;
            let updatedDataWithRemovedItem = addDataToCategory({type: 'removeCategory'}, categoryId, [...state.categoryList]);

            return {
                ...state,
                categoryList: updatedDataWithRemovedItem,
                removeCategoryID: ''
            };

        case ct.TOGGLE_REMOVE_MODAL:
            let removeIdExist = state.removeCategoryID ? '': payload;

            return { ...state,
                removeCategoryID: removeIdExist
            };

        case ct.TOGGLE_ADD_TASK_MODAL:
            //let updatedDataWithAddedTask = addTask(payload, [...state.categoryList]);
            return {
                ...state
            };

        default:
            return state;
    }
};