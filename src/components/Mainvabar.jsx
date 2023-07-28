import './mainnav.css'
import { useContext } from 'react'
import { Context } from '../context/postContext/context'
import Profile from '../pages/Profile';
import PostComponent from '../components/PostComponent'
import Chat from '../Components/Chat'
import Friends from '../pages/Friends'
import Login from '../pages/Login'
import {IoChatbubble} from 'react-icons/Io5'
import PostList from './PostList';
export default function Mainavbar() {
    const { ui } = useContext(Context);
    return (
        <div className='mainnav'>
            {
                ui == 'add' ? (
                    <div className="mainnav_wrapper">
                        {/* <h2>Create Post</h2> */}
                        <PostComponent />
                    </div>
                ) : ui == 'view' ? (
                    <div className="mainnav_wrapper" >
                        {/* <h2>View All Post</h2> */}
                        <PostList />
                    </div>
                ): ui == 'Chat' ? (
                    <div className="mainnav_wrapper1">
                        {/* <h2>User Profile</h2> */}
                        <Chat />
                    </div>
                ): ui == 'Friends' ? (
                    <div className="mainnav_wrapper1">
                        {/* <h2>User Profile</h2> */}
                        <Friends />
                    </div>
                ) : ui == 'Login' ? (
                    <div className="mainnav_wrapper1">
                        {/* <h2>User Profile</h2> */}
                        <Login />
                    </div>
                )  : ui == 'Profile' ? (
                    <div className="mainnav_wrapper3">
                        {/* <h2>User Profile</h2> */}
                        <Profile />
                    </div>
                ) : null

            }
        </div>
    )
}