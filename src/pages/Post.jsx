import React from 'react'

import Sidenavbar from '../components/Sidenavbar'
import Mainavbar from '../components/Mainvabar'
import Sidebar from '../components/Sidebar'
import './Post.css'
function Post() {
  return (
    <div className='post'>
      <div className='postitems'>
      
      <Sidenavbar />
      < Mainavbar/>
      {/* <Sidebar/> */}
      
    </div>
    </div>
  )
}

export default Post