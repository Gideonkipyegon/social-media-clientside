
    import './Profile.css'
   
    export default function Profile() {
    
        
        return (
            <div className='profile'>
                <div className="userAvator">
                    <img className='userAvator-img' src="./images/proffile.jpg" alt="no_pic" />
                    
                </div>
                <div className="user-Details">
                    <h2>Username:</h2>
                    {/* <p>{user.username}</p> */}
                    <h2>Gender:</h2>
                    {/* <p>{user.email}</p> */}
                    <h2>Location:</h2>
                    {/* <p>{user.id}</p> */}
                    <h2>  Bio Data :</h2>
                    <h2>Followers:</h2>
                </div>
            </div>
        )
    }
  
  
