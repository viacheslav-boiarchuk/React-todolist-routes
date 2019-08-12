import { createSelector } from 'reselect'

export const rootCommonState = createSelector(
    state => state.common,
    common => common
);

export const openedErrorModal = createSelector(
    rootCommonState,
    common => {
        return common.openedErrorModal
    }
);

export const openedTaskModal = createSelector(
    rootCommonState,
    common => common.openedTaskModal
);

export const openedRemoveModal = createSelector(
    rootCommonState,
    common => common.openedRemoveModal
);

export const openedDateModal = createSelector(
    rootCommonState,
    common => common.openedDateModal
);

export const activeTaskID = createSelector(
    rootCommonState,
    common => common.activeTaskID
);

export const isOpened = createSelector(
    rootCommonState,
    common => common.isOpened
);

export const isSidebarVisible = createSelector(
    rootCommonState,
    common => common.isSidebarVisible
);