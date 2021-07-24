import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas';
import { routerMiddleware } from 'react-router-redux'
import "regenerator-runtime/runtime"
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(preloadedState, history) {
    let middleware = [
        sagaMiddleware,
        routerMiddleware(history)
    ];

    if (process.env.NODE_ENV !== 'production') {
        const { createLogger } = require('redux-logger');
        const logger = createLogger();
        middleware = [...middleware, logger];
    }

    const store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(...middleware))
    );
    sagaMiddleware.run(rootSaga);
    return store;
}