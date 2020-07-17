import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/home'

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <header className="App-header">
        <div  className="section gradient-1" ></div>
      </header>
      <div className="content-container">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
