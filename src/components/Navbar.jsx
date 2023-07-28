import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { AiFillBell,AiOutlineLogin,AiFillProfile} from 'react-icons/Ai'
import { FaHome,FaAddressBook,FaFileSignature,FaRocketchat } from 'react-icons/Fa'
import {IoChatbubble} from 'react-icons/Io5'

import { BiSearch,BiLogOutCircle} from 'react-icons/Bi'
function Navbar() {
    // const name = useSelector((state) => state.user.name);
    // const { user, dispatch } = useContext(Context);
    // const navigate = useNavigate();
    // const handleLogout = () => {
    //     dispatch({ type: "LOGOUT" });
    //     navigate("/");}
    return (
        <div className='navbar'>
            
            <div className='navbar-items'>
                <h1 style={{color:'blue'}}>CommuniLink</h1>
                <div className='navbar-items2'>
                <Link to="/" style={{display:"flex", flexDirection:"row", gap: 5, alignItems: "center"}}><FaHome className='icons1'/> Home </Link>
                <Link to="/Post"style={{display:"flex", flexDirection:"row", gap: 5, alignItems: "center"}} ><FaAddressBook className='icons1'/>Post  </Link> 
                {/* <Link to="/Profile" style={{display:"flex", flexDirection:"row", gap: 5, alignItems: "center"}}><AiFillProfile/>Profile </Link> */}
                {/* <Link to="/Chat" style={{display:"flex", flexDirection:"row", gap: 5, alignItems: "center"}}><IoChatbubble className='icons1'/> Live Chat </Link> */}
                {/* <Link to="/photo" style={{display:"flex", flexDirection:"row", gap: 5, alignItems: "center"}}><IoChatbubble className='icons1'/> upload images </Link> */}
                {/* </div>
                <div className='navbar-items2'> */}
                <Link to="/Login" style={{display:"flex", flexDirection:"row", gap: 5, alignItems: "center"}}><AiOutlineLogin className='icons1'/> Login </Link>
                {/* <Link to="/Fiends" style={{display:"flex", flexDirection:"row", gap: 5, alignItems: "center"}}><AiOutlineLogin className='icons1'/> Friends </Link> */}
                <Link to="/Signup" style={{display:"flex", flexDirection:"row", gap: 5, alignItems: "center"}}><FaFileSignature className='icons1'/>Signup </Link>
                <Link  to="/Logout" style={{display:"flex", flexDirection:"row", gap: 5, alignItems: "center"}}><BiLogOutCircle className='icons1'/>Logout</Link>
                <Link to="/notification" style={{display:"flex", flexDirection:"row", gap: 5, alignItems: "center"}}><AiFillBell className='icons1'/>Notification</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar