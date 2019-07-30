import * as ct from './constants';
import { createAction } from '../helpers/actions';

export const toggleSidebar = createAction(ct.SIDEBAR_TOGGLE);
export const addCategories = createAction(ct.ADD_CATEGORIES);
export const removeCategory = createAction(ct.REMOVE_CATEGORY);
export const modifyActiveCategory = createAction(ct.MODIFY_ACTIVE_CATEGORY);
export const addTask = createAction(ct.ADD_TASK);
export const toggleRemoveModal = createAction(ct.TOGGLE_REMOVE_MODAL);
export const toggleNewTaskModal = createAction(ct.TOGGLE_ADD_TASK_MODAL);