// import './mainnav.css'
// import { useContext } from 'react'
// import { Context } from '../context/todoContext/Context'
// import Profile from '../pages/Profile';
// import postList from './postList';
// import Add from './AddPost';
// export default function Mainavbar() {
//     const { ui } = useContext(Context);
//     return (
//         <div className='mainnav'>
//             {
//                 ui == 'add' ? (
//                     <div className="mainnav_wrapper">
//                         <h2>Add Post</h2>
//                         <AddPost />
//                     </div>
//                 ) : ui == 'view' ? (
//                     <div className="mainnav_wrapper" >
//                         <h2>View All Post</h2>
//                         <PostList />
//                     </div>
//                 ) : ui == 'profile' ? (
//                     <div className="mainnav_wrapper">
//                         <h2>User Profile</h2>
//                         <Profile />
//                     </div>
//                 ) : null

//             }
//         </div>
//     )
// }