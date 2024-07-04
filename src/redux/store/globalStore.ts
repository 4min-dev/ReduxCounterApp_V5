import counterReducer from "./reducers/counterReducer";
import counterDelayReducer from "./reducers/counterDelayReducer";
import createSagaMiddleware from 'redux-saga'
import { counterSagaWatcher } from "../../redux-saga/saga/counterSaga";
import { configureStore } from "@reduxjs/toolkit";
import rootErrorReducer from "./reducers/rootErrorReducer";
import { fetchAPI } from "../services/fetchAPI";

const sagaMiddleware = createSagaMiddleware()

export const globalStore = configureStore({
    reducer:{
        counterReducer:counterReducer,
        [fetchAPI.reducerPath]:fetchAPI.reducer,
        counterDelayReducer:counterDelayReducer,
        rootErrorReducer:rootErrorReducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(fetchAPI.middleware,sagaMiddleware)
})
export type TRootTypeState = ReturnType<typeof globalStore.getState>
export type TRootDispatch = typeof globalStore.dispatch

sagaMiddleware.run(counterSagaWatcher)