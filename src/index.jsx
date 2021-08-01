import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";
import history from './history';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import "antd/dist/antd.css";

export const store = configureStore();

const rootExport = {
  history,
  store,
};

export default rootExport;

ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>
  ,
    document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
