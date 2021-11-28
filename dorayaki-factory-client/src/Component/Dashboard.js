import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Recipe from './Recipe';
import InsertRecipe from './InsertRecipe';
import DaftarRequest from './DaftarRequest';


const Dashboard = () => {
  let history = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    history("/");
    window.location.reload();
  };  
  return (
        <div>
        <ul class="tileMe">
        <li className="nav-link">Welcome User!</li>
        <li onClick={(handleLogout)} className="nav-link">Logout</li>  
        <li className="nav-item">
            <Link to="/recipe" className="nav-link">Show Recipe</Link>
        </li>
        <li className="nav-item">
            <Link to="/insertRecipe" className="nav-link">Insert Recipe</Link>
        </li>
        <li className="nav-item">
            <Link to="/DaftarRequest" className="nav-link">Daftar Request</Link>
        </li>
        <li className="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/insert'} className="nav-link">Insert</Link>
              </li>
              <li className="nav-item">
                <Link to={'/view'} className="nav-link">View</Link>
              </li>
        </ul>
        <br></br>
        <br></br>
        </div>
  );
}
 
export default Dashboard;
