import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

const Re = combineReducers({
    loadingBar: loadingBarReducer,
});
export default Re;
