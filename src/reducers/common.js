import {
    SIDEBAR_TOGGLE,
    TOGGLE_REMOVE_MODAL,
    REMOVE_CATEGORY,
    TOGGLE_ERROR_MODAL,
    TOGGLE_ADD_TASK_MODAL
} from '../actions/constants';

const initialState = {
    isSidebarVisible: true,
    openedRemoveModal: false,
    openedTaskModal: false,
    openedErrorModal: false,
};

export const common = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case SIDEBAR_TOGGLE:
            return { ...state, isSidebarVisible: !state.isSidebarVisible };

        case TOGGLE_REMOVE_MODAL:
            return {
                ...state,
                openedRemoveModal: !state.openedRemoveModal
            };

        case REMOVE_CATEGORY:
            return {
                ...state,
                openedRemoveModal: false
            };

        case TOGGLE_ERROR_MODAL:
            return {
                ...state,
                openedErrorModal: !state.openedErrorModal
            };

        case TOGGLE_ADD_TASK_MODAL:
            return {
                ...state,
                openedTaskModal: !state.openedTaskModal
            };

        default:
            return state;
    }
};