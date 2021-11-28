// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react'
import { Redirect, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import * as JWT from 'jwt-decode'

const jwt = require('jsonwebtoken');

var dateNow = new Date();

//let t = JWT(localStorage.getItem("token")).exp

const PrivateRoute = () => {
  // Add your own authentication on the below line.
  const userObj = JSON.parse(localStorage.getItem('token') && '{}');
  //alert(localStorage.getItem('token'));
  const isLoggedIn = userObj ? true : false;
  if(isLoggedIn) {
    //console.log(JWT(localStorage.getItem("token")).exp);
    //if (JWT(localStorage.getItem("token")).exp < Date.now() / 1000) {
      //localStorage.clear();
      //return(<Login/>)
    //}  
    return(<Dashboard/>);
  }
  else {
      return(<Login/>)
  }
}

export default PrivateRoute;
