import {
    SIDEBAR_TOGGLE,
    TOGGLE_REMOVE_MODAL,
    REMOVE_CATEGORY,
    TOGGLE_ERROR_MODAL,
    TOGGLE_ADD_TASK_MODAL,
    TOGGLE_DATE_MODAL,
} from '../actions/constants';
import Immutable from 'immutable';

const initialState = Immutable.Map({
    isSidebarVisible: true,
    openedRemoveModal: false,
    openedTaskModal: false,
    openedErrorModal: false,
    openedDateModal: false,
    activeTaskID: ''
});

export const common = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SIDEBAR_TOGGLE:
            let sidebarVisibleVal = state.get('isSidebarVisible');

            return state
                .set('isSidebarVisible', !sidebarVisibleVal);

        case TOGGLE_REMOVE_MODAL:
            let openedRemoveVal = state.get('openedRemoveModal');

            return state
                .set('openedRemoveModal', !openedRemoveVal);

        case REMOVE_CATEGORY:

            return state
                .set('openedRemoveModal', false);

        case TOGGLE_ERROR_MODAL:
            let openedErrorVal = state.get('openedErrorModal');

            return state
                .set('openedErrorModal', !openedErrorVal);

        case TOGGLE_ADD_TASK_MODAL:
            let openedTaskVal = state.get('openedTaskModal');

            return state
                .set('openedTaskModal', !openedTaskVal);

        case TOGGLE_DATE_MODAL:
            let taskIDVal = state.get('activeTaskID'),
                activeTaskState = taskIDVal ? '': payload,
                openedDateVal = state.get('openedDateModal');

            return state
                .set('openedDateModal', !openedDateVal)
                .set('activeTaskID', activeTaskState);

        default:
            return state;
    }
};