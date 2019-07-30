import {SIDEBAR_TOGGLE, TOGGLE_REMOVE_MODAL, REMOVE_CATEGORY} from '../actions/constants';

const initialState = {
    isSidebarVisible: true,
    openedRemoveModal: false,
    openedTaskModalModal: false,
};

export const common = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case SIDEBAR_TOGGLE:
            return { ...state, isSidebarVisible: !state.isSidebarVisible };

        case TOGGLE_REMOVE_MODAL:
            return { ...state,
                openedRemoveModal: !state.openedRemoveModal
            };

        case REMOVE_CATEGORY:
            return { ...state,
                openedRemoveModal: false
            };

        default:
            return state;
    }
};