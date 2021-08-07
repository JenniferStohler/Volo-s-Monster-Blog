import './index.css';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="class">
      <h1>Volo the Bard's Boisterous Blog!</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={{
          color: "white",
          backgroundColor: "#f1356d",
          borderRadius: '8px',
          padding: '3px'
        }}>New Blog</a>
      </div>
    </nav>
   );
}
 
export default Navbar;