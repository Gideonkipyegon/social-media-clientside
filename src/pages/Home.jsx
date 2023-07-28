import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import './Home.css'
function Home() {
  return (
    <div className='home'>

      <h1>Welcome to CommunityLink platform.✨✨✨</h1>
      {/* <button><Link to='Post'>view post</Link></button> */}
      {/* <Sidebar/> */}
      {/* <img src="./images/pexels-pixabay-207896.jpg" className='image'/>
      <div className='animated image'>
        {/* <img src="./images/merakist-CNbRsQj8mHQ-unsplash.jpg" alt="social image"  style={{width:'100%',height:'50vh',animation:'1s Infinity'}}/> */}
      {/* </div> */}
    </div>
  );
}

export default Home