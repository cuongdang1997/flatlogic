import 'whatwg-fetch';
import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import initialSize from './utils/flexiable';
import Home from './containers/home/index.jsx';
import rootSaga from './saga';
import CreateStore from './store';
const store=CreateStore();
store.runSaga(rootSaga);
initialSize(window, window['lib'] || (window['lib'] = {}));
render(
  <Provider store={store}>
    <Home/>
  </Provider>,
document.getElementById('app'));
