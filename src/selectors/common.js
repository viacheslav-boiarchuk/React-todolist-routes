import { createSelector } from 'reselect'

export const rootCommonState = createSelector(
    state => state.common,
    common => common
);

export const openedErrorModal = createSelector(
    rootCommonState,
    common => {
        return common.get('openedErrorModal')
    }
);

export const openedTaskModal = createSelector(
    rootCommonState,
    common => common.get('openedTaskModal')
);

export const openedRemoveModal = createSelector(
    rootCommonState,
    common => common.get('openedRemoveModal')
);

export const openedDateModal = createSelector(
    rootCommonState,
    common => common.get('openedDateModal')
);

export const activeTaskID = createSelector(
    rootCommonState,
    common => common.get('activeTaskID')
);

export const isOpened = createSelector(
    rootCommonState,
    common => common.get('isOpened')
);

export const isSidebarVisible = createSelector(
    rootCommonState,
    common => {
        return common.get('isSidebarVisible');
    }
);