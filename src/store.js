import { createStore } from 'redux';
import { reducer } from './reducers';

export function initStore(preloadedState) {
    return createStore(
        reducer,
        preloadedState
    );
}