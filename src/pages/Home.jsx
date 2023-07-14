import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
  return (
    <div className='home'>
      <h1>Welcome to my social media platform. <br />This is where you can connect with new friends all over the world</h1>
      <button><Link to='Post'>view post</Link></button>
      {/* <img src="./images/pexels-pixabay-207896.jpg" className='image'/> */}
      <div className='animated image'>
        {/* <img src="./images/merakist-CNbRsQj8mHQ-unsplash.jpg" alt="social image"  style={{width:'100%',height:'50vh',animation:'1s Infinity'}}/> */}
      </div>
    </div>
  );
}

export default Home