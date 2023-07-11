import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { AiFillBell,AiOutlineLogin,AiFillProfile} from 'react-icons/Ai'
import { FaHome,FaAddressBook,FaFileSignature } from 'react-icons/Fa'


// import { IoCreate} from 'react-icons/Io'
import { BiSearch,BiLogOutCircle} from 'react-icons/Bi'
function Navbar() {
    return (
        <div className='navbar'>
            
            <div className='navbar-items'>
                Yegon Platform
                <Link to="/"><FaHome/> Home </Link>
                <Link to="/Post"><FaAddressBook/> Post </Link>
                <Link to="/Profile"> <AiFillProfile/>Profile </Link>
                <Link to="/Login"><AiOutlineLogin/> Login </Link>
                <Link to="/Signup"> <FaFileSignature/>Signup </Link>
                <Link to="/Logout"> <BiLogOutCircle/>Logout</Link>
                <Link to="/Notification"><AiFillBell /></Link>
            </div>
        </div>
    )
}

export default Navbar