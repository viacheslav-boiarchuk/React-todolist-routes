import * as ct from './constants';
import { createAction } from '../helpers/actions';

export const toggleSidebar = createAction(ct.SIDEBAR_TOGGLE);
export const addCategories = createAction(ct.ADD_CATEGORIES);
export const removeCategory = createAction(ct.REMOVE_CATEGORY);
export const modifyActiveCategory = createAction(ct.MODIFY_ACTIVE_CATEGORY);
export const addTask = createAction(ct.ADD_TASK);
export const toggleRemoveModal = createAction(ct.TOGGLE_REMOVE_MODAL);
export const toggleNewTaskModal = createAction(ct.TOGGLE_ADD_TASK_MODAL);
export const toggleErrorModal = createAction(ct.TOGGLE_ERROR_MODAL);
export const toggleDateModal = createAction(ct.TOGGLE_DATE_MODAL);
export const changeTaskDate = createAction(ct.CHANGE_TASK_DATE);