import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Component/Login';
import Register from './Component/Register';
import Dashboard from './Component/Dashboard';
import { Axios } from 'axios';
import Recipe from './Component/Recipe';
import InsertRecipe from './Component/InsertRecipe';
import DaftarRequest from './Component/DaftarRequest';
import PrivateRoute from './Component/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css'
import Insert from './Component/insert';
import View from './Component/view';
import Edit from './Component/edit';

//import StudentList from './Component/RecipeList';

import './App.css' 

class App extends Component {
  render() { return (
    <Router>
    <div>
      <nav>
        <PrivateRoute/>
        </nav> 
        <Routes>
        <Route path="/register" exact element={<Register/>}/>
        <Route path="/recipe" exact element={<Recipe/>}/>
        <Route path="/insertRecipe" exact element={<InsertRecipe/>}/>
        <Route path="/DaftarRequest" exact element={<DaftarRequest/>}/>
        <Route path="/insert" element={<Insert />} />
        <Route path="/view" element={<View />} />
        <Route path='/edit/:id' exact element={<Edit/>} />
        </Routes>
        </div>
    </Router>
  );
}
}

export default App;