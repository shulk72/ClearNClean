import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import HomePage from "./HomePage";
import Info from "./Info";
import 'semantic-ui-css/semantic.min.css'
import '@mui/material'
import Dashboard from "./Dashboard";
//import SignUp from "./components/Registering/SignUp";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/Home" element={<HomePage/>} />
            <Route exact path="" element={<HomePage/>} />
            <Route exact path="/Dashboard" element={<Dashboard/>} />
             <Route exact path="/Info" element={<Info/>} />

        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);