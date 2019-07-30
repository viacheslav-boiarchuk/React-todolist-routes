import { categories } from './categories';
import { common } from './common';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
    categories,
    common
});