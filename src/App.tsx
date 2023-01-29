import React from 'react';
import 'bulma/css/bulma.min.css';
import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Troll from './components/Troll';
import Main from './components/Main';
import Settings from './components/Settings';
import NotFound from './components/NotFound';

function App() {
  return (        
    <div className="App">            
      <div className="container">
        <div className="columns">
          <div className="column is-one-fifth">
            <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
            </nav>
            <aside className="menu">
              <p className="menu-label">
                General
              </p>
              <ul className="menu-list">
              
                <li><Link to="/">Main</Link></li>
                <li><Link to="/trolls">Trolls</Link></li>
                
              </ul>
              <p className="menu-label">
                Administration
              </p>
              <ul className="menu-list">             
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/logout">Logout</Link></li>                
              </ul>            
            </aside>
          </div>
          <div className="column">
            <Routes>              
              <Route path="/"  element={<Main />} />
              <Route path="/trolls"  element={<Troll />} />
              <Route path="/settings"  element={<Settings />} />
              <Route path="*"  element={<NotFound />} />              
            </Routes>        
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;
