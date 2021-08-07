import './index.css';
import React from 'react';

const Home = () => {

  const handleClick = () => {
    console.log('Hello dear adventurer!')
  }
  return (
    <div className="home">
      <h2>Welcome to Volo the Bard's Adventurous (and Dangerous) Blog!</h2>
      <button style={{
        color: "white",
        backgroundColor: "green",
        padding: "px-3 py-3",
        borderRadius: "7px"
      }}
      onClick={handleClick}>Click Here</button>
    </div>
    );
}
 
export default Home;