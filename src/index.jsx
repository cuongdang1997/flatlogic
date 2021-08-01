import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";
import history from './history';

ReactDOM.render(
    <App history={history}/>,
    document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
