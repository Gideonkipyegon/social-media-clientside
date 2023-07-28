import './Sidenavbar.css';
import { useContext } from 'react'
import {IoChatbubble} from 'react-icons/Io5'
import {CgProfile} from 'react-icons/Cg'
import {FaUserFriends,FaBookMedical} from 'react-icons/Fa'
import {GrFormView} from 'react-icons/Gr'
import { Context } from "../context/postContext/context";

export default function Sidenavbar() {
  const { dispatch } = useContext(Context);
  const handleAdd = () => {
      dispatch({ type: "ADD", payload: 'add' })
  }
  const handleView = () => {
      dispatch({ type: "ADD", payload: 'view' })
  }
  const handleProfile = () => {
      dispatch({ type: "PROFILE", payload: 'Profile' })
  }
  const handleChat = () => {
    dispatch({ type: "CHAT", payload: 'Chat' })
}
const handleFriends = () => {
  dispatch({ type: "FRIENDS", payload: 'Friends' })
}
const handleLogin = () => {
  dispatch({ type: "LOGIN", payload: 'Login' })
}
  return (
    <div className='sidenav'>
      <div className="sidenav_wrapper">
        <div className="sidenav_title" onClick={handleProfile}><CgProfile/> Profile</div>
      </div>
      <div className="sidenav_wrapper">
        <div className="sidenav_item" onClick={handleAdd}><FaBookMedical/>Create Post</div>
      </div>
      <div className="sidenav_wrapper">
      <div className="sidenav_item" onClick={handleView}><GrFormView/>View All Post</div> 
      </div>
      <div className="sidenav_wrapper">
      <div className="sidenav_item" onClick={handleChat}><IoChatbubble />Live Chat</div> 
      </div>
      <div className="sidenav_wrapper">
      <div className="sidenav_item" onClick={handleFriends}><FaUserFriends/>Friends</div> 
      </div>
    </div>
  );
}
