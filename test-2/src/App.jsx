import './App.css';
import React, { Component }  from 'react';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
//import Sign_up from './Pages/Sign_up';
//import Log_in from './Pages/Log_in';
//import React, { Component }  from 'react';
//
import Public from './Routes/Public';

function App() {
  return(
    <div className="App">
        <Router>
          <NavBar />
          <Public />
        </Router>
    </div>
  );
}
export default App;