import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import userReducer from '../src/modules/demo/reducers/users'

const Re = combineReducers({
    loadingBar: loadingBarReducer,
    userReducer
});
export default Re;
