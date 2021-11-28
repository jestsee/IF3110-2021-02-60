import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Insert from './insert';
import View from './view';
import Edit from './edit';

function App() {
  return (
      <Router>
      <div className="Container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">REACT CRUD EXAMPLE</Link>
          <div className="collapse navbar-collapse" id="navbarSupportContent">
            <ul className="navbar-nav mr-auto">
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
          </div>
        </nav>

        <h1>WELCOME</h1><br/>
        <Routes>
          <Route path="/insert" element={<Insert />} />
          <Route path="/view" element={<View />} />
          <Route path='/edit/:id' exact element={<Edit/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
