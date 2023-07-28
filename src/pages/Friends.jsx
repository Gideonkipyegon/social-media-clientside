import React from 'react'
import {Link} from 'react-router-dom'
function Friends() {
  return (
    <div className='friends'>
     <div className='friensitem'>
     <img src="/images/IMG_20230209_173943_735.jpg" alt="image" style={{borderRadius:'50%',width:'6%'}}/>
     <p>Name:James</p>
     <p ><Link to='/Chat' style={{backgroundColor:'gray',borderRadius:'10px',color:'blue',width:'20px'}}>Chat</Link></p>
     <button>Following</button>
     </div>
     <div className='friensitem'>
     <img src="/images/IMG_20230310_130222_398.jpg" alt="image" style={{borderRadius:'50%',width:'6%'}}/>
     <p>Name:Yego</p>
     <p><Link to='/Chat' style={{backgroundColor:'gray',borderRadius:'10px',color:'blue',width:'20px'}}>Chat</Link></p>
     <button>Following</button>
     </div>
    </div>
  )
}

export default Friends