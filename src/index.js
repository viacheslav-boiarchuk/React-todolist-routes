import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { initStore } from './store';
import * as serviceWorker from './serviceWorker';
import { AppConnector } from './connector';

const AppConnected = AppConnector(App);
export const store = initStore();

window.store = store;

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <AppConnected/>
        </BrowserRouter>
    </Provider>
,document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
