import { combineReducers } from 'redux';

import homePageData from 'pages/home/slice';

import { store } from './store';

const rootReducer = combineReducers({ homePageData });

export type RootState = ReturnType<typeof store.getState>;

export default rootReducer;
