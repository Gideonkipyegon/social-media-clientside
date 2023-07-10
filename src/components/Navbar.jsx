import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { AiFillBell,AiOutlineLogin} from 'react-icons/Ai'
import { FaHome,} from 'react-icons/Fa'


// import { IoCreate} from 'react-icons/Io'
import { BiSearch,BiLogOutCircle} from 'react-icons/Bi'
function Navbar() {
    return (
        <div className='navbar'>
            
            <div className='navbar-items'>
                Yegon Platform
                <Link to="/"><FaHome/> Home </Link>
                <Link to="/Post"> Post </Link>
                <Link to="/Profile"> Profile </Link>
                <BiSearch/>  <input type="text" placeholder="search" />
                <Link to="/Login"><AiOutlineLogin/> Login </Link>
                <Link to="/Signup"> Signup </Link>
                <Link to="/Logout"> <BiLogOutCircle/>Logout</Link>
                <Link to="/Notification"><AiFillBell /></Link>
            </div>
        </div>
    )
}

export default Navbar