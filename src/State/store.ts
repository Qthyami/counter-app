import {combineReducers, createStore} from "redux";
import {AppStateReducer} from "./AppStateReducer";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export const rootReducer = combineReducers({
    AppState: AppStateReducer,
    // Counter2State:
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

// Enhance the store creation with composeWithDevTools
export const store = createStore(rootReducer, composeWithDevTools());
// @ts-ignore
window.store = store;