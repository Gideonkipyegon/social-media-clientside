
    import './Profile.css'
    import { useContext } from 'react'
    import { Context } from '../context/userContext/Context'
   
    export default function Profile() {
        const { user } = useContext(Context);
        
        return (
            <div className='profile'>
                <div className="userAvator">
                    <img className='userAvator-img' src="./images/proffile.jpg" alt="no_pic" />
                    
                </div>
                <div className="user-Details">
                    <h2>Username:</h2>
                    <p>{user.username}</p>
                    <h2>Name:</h2>
                    <p>{user.Name}</p>
                    <h2>UserID:</h2>
                    <p>{user.id}</p>
                    <h2>Gender:</h2>
                    <p>{user.Gender}</p>
                    <h2>Location:</h2>
                    <p>{user.Location}</p>
                    <h2>Bio Data :</h2>
                    <p>{user.Bio}</p>
                    {/* <h2>Followers:</h2> */}
                </div>
            </div>
        )
    }
  
  
