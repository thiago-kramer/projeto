import React from 'react';
import ReactDOM from 'react-dom';
import Login from "./views/FrontPage/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

ReactDOM.render(
    <React.StrictMode>
        <Login />
    </React.StrictMode>,
    document.getElementById('root')
);

