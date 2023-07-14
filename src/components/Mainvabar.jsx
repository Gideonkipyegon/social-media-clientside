import './mainnav.css'
import { useContext } from 'react'
import { Context } from '../context/postContext/Context'
import Profile from '../pages/Profile';
import PostComponent from '../components/PostComponent'
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
                ) : ui == 'Profile' ? (
                    <div className="mainnav_wrapper">
                        {/* <h2>User Profile</h2> */}
                        <Profile />
                    </div>
                ) : null

            }
        </div>
    )
}