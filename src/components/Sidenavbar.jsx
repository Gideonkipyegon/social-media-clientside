import './Sidenavbar.css';


export default function Sidenavbar() {

  return (
    <div className='sidenav'>
      <div className="sidenav_wrapper">
        <div className="sidenav_title" > Profile</div>
      </div>
      <div className="sidenav_wrapper">
        <div className="sidenav_item" >Create Post</div>
        <div className="sidenav_item" >View Post</div> 
      </div>
    </div>
  );
}
