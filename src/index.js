import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./pages/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

ReactDOM.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>,
    document.getElementById('root')
);

