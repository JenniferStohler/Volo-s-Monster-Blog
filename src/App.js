import React from 'react';
import Navbar from './Navbar';
import Home from "./Home";
import './index.css';

function App() {

  
 
  // const person = { name: 'Volo', age: 30 };
  
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>
          <Home />
        </h1>
     
        {/* <p>By { person }</p> */}
      
        
     
      </div>
    </div>
  );
}

export default App;
