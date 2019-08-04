import { connect } from 'react-redux';
import {
    toggleSidebar,
    addCategories,
    modifyActiveCategory,
    toggleNewTaskModal,
    toggleRemoveModal,
    removeCategory,
    toggleErrorModal,
    addTask
} from './actions';

export const headerConnector = connect(state => ({
    isOpened: state.common.isSidebarVisible
}), {
    toggleSidebar: () => toggleSidebar()
});

export const sideBarConnector = connect(state => ({
    common: state.common,
    categoryList: state.categories.categoryList
}), {
    addCategories: (payload) => addCategories(payload),
    toggleRemoveModal: (payload) => toggleRemoveModal(payload),
    modifyActiveCategory: (payload) => modifyActiveCategory(payload)
});

export const tasksConnector = connect(state => ({
    state: state
}), {
    toggleNewTaskModal: (payload) => toggleNewTaskModal(payload),
    toggleErrorModal: (payload) => toggleErrorModal(payload)
});

export const removeModalConnector = connect(state => ({
    openedRemoveModal: state.common.openedRemoveModal
}), {
    removeCategory: (payload) => removeCategory(payload),
    toggleRemoveModal: (payload) => toggleRemoveModal(payload),
});

export const taskModalConnector = connect(state => ({
    openedTaskModal: state.common.openedTaskModal
}), {
    toggleNewTaskModal: (payload) => toggleNewTaskModal(payload),
    addTask: (payload) => addTask(payload)
});

export const errorModalConnector = connect(state => ({
    openedErrorModal: state.common.openedErrorModal
}), {
    toggleErrorModal: (payload) => toggleErrorModal(payload),
});

export const AppConnector = connect(state => state);