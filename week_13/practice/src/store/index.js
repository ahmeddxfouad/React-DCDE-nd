import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas";

const initialStore = (preloadedState  = {}) => {

    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware: () => [sagaMiddleware]
    });

    sagaMiddleware.run(rootSaga);

    return store;
}


export default initialStore;
