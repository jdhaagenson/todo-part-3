import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import {
    BrowserRouter
} from 'react-router-dom';
// import { createStore } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import RootReducer from './reducer';
import todosList from "./todos.json";

const store = configureStore({
    reducer: RootReducer,
    preloadedState: {todos:todosList},
    devTools: process.env.NODE_ENV !== 'production'
    + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

ReactDOM.render(

<BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
        <App />
    </Provider>,
</BrowserRouter>,
document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
