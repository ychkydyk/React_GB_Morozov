import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import './index.css';
import {store} from "./store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);


