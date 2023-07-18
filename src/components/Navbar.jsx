import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { AiFillBell,AiOutlineLogin,AiFillProfile} from 'react-icons/Ai'
import { FaHome,FaAddressBook,FaFileSignature,FaRocketchat } from 'react-icons/Fa'
import {IoChatbubble} from 'react-icons/Io5'


// import { IoCreate} from 'react-icons/Io'
import { BiSearch,BiLogOutCircle} from 'react-icons/Bi'
function Navbar() {
    return (
        <div className='navbar'>
            
            <div className='navbar-items'>
                Yegon Platform
                <Link to="/"><FaHome className='icons1'/> Home </Link>
                <Link to="/Post" ><FaAddressBook className='icons1'/>Post  </Link> 
                {/* <Link to="/Profile"><AiFillProfile/>Profile </Link> */}
                <Link to="/Chat"><IoChatbubble className='icons1'/> Live Chat </Link>
                <Link to="/Login"><AiOutlineLogin className='icons1'/> Login </Link>
                <Link to="/Signup"><FaFileSignature className='icons1'/>Signup </Link>
                <Link to="/Logout"><BiLogOutCircle className='icons1'/>Logout</Link>
                <Link to="/Notification"><AiFillBell className='icons1'/>Notification</Link>
            </div>
        </div>
    )
}

export default Navbar