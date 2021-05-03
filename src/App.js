import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from "./components/Nav";
import logo from './logo.svg';
import './App.css';

import Login from "./components/Login";

import Dashboard from './Dashboard/Dashboard';
import Home from './Pages/Home';
import Welcome from "./Pages/Welcome";
function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <main className="form-signIn">
            <Route path="/" render={(props) => <Login {...props}/>}/>
            <Route path="/login" component={Login}/>
            <Route path="/welcome" component={Welcome}/>
      </main>
      </BrowserRouter>

    </>
  );
}

export default App;
