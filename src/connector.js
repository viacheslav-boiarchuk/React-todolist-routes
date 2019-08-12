import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import {
    openedErrorModal,
    openedTaskModal,
    openedRemoveModal,
    openedDateModal,
    activeTaskID,
    isOpened,
    isSidebarVisible
} from './selectors/common';

import {
    categoryListState
} from './selectors/categories.js';

import {
    toggleSidebar,
    addCategories,
    modifyActiveCategory,
    toggleNewTaskModal,
    toggleRemoveModal,
    removeCategory,
    toggleErrorModal,
    toggleDateModal,
    changeTaskDate,
    addTask
} from './actions';


const isOpenedSelector = createSelector(
    [isOpened],
    (isOpened) => {
        return ({
            isOpened
        });
    }
);

export const headerConnector = connect(isOpenedSelector, {
    toggleSidebar: () => toggleSidebar()
});


const sidebarSelector = createSelector(
    [isSidebarVisible, categoryListState],
    (isSidebarVisible, categoryListState) => {
        return ({
            isSidebarVisible, categoryListState
        });
    }
);

export const sideBarConnector = connect(sidebarSelector, {
    addCategories: (payload) => addCategories(payload),
    toggleRemoveModal: (payload) => toggleRemoveModal(payload),
    modifyActiveCategory: (payload) => modifyActiveCategory(payload)
});

const categoriesSelector = createSelector(
    [categoryListState],
    (categoryListState) => {
        return ({
            categoryList: categoryListState
        });
    }
);

export const tasksConnector = connect(categoriesSelector, {
    toggleNewTaskModal: (payload) => toggleNewTaskModal(payload),
    toggleErrorModal: (payload) => toggleErrorModal(payload),
    toggleDateModal: (payload) => toggleDateModal(payload),
});

const removeFlagSelector = createSelector(
    [openedRemoveModal],
    (openedRemoveModal) => {
        return ({
            openedRemoveModal
        });
    }
);

export const removeModalConnector = connect(removeFlagSelector, {
    removeCategory: (payload) => removeCategory(payload),
    toggleRemoveModal: (payload) => toggleRemoveModal(payload),
});

const dateModalSelector = createSelector(
    [openedDateModal, activeTaskID],
    (openedDateModal, activeTaskID) => {
        return ({
            openedDateModal,
            activeTaskID
        });
    }
);

export const dateModalConnector = connect(dateModalSelector, {
    toggleDateModal: (payload) => toggleDateModal(payload),
    changeTaskDate: (payload) => changeTaskDate(payload),
});

const openedFlagSelector = createSelector(
    [openedTaskModal],
    (openedTaskModal) => {
        return ({
            openedTaskModal
        });
    }
);

export const taskModalConnector = connect(openedFlagSelector, {
    toggleNewTaskModal: (payload) => toggleNewTaskModal(payload),
    addTask: (payload) => addTask(payload)
});

const errorFlagSelector = createSelector(
    [openedErrorModal],
    (openedErrorModal) => {
        return ({
            openedErrorModal
        });
    }
);

export const errorModalConnector = connect(errorFlagSelector, {
    toggleErrorModal: (payload) => toggleErrorModal(payload),
});

export const AppConnector = connect(state => state);