import './Sidenavbar.css';
import { useContext } from 'react'
import { Context } from "../context/postContext/Context";

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
  return (
    <div className='sidenav'>
      <div className="sidenav_wrapper">
        <div className="sidenav_title" onClick={handleProfile}> Profile</div>
      </div>
      <div className="sidenav_wrapper">
        <div className="sidenav_item" onClick={handleAdd}>Create Post</div>
      </div>
      <div className="sidenav_wrapper">
      <div className="sidenav_item" onClick={handleView}>View All Post</div> 
      </div>
    </div>
  );
}
