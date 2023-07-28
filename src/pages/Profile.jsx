import React, { useContext, useState } from 'react';
import { Context } from '../context/userContext/Context';
import './Profile.css';

export default function Profile() {
    const { user, updateUser } = useContext(Context);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isFollowed, setIsFollowed] = useState(false);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setSelectedImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="profile" >
            < div className='profileitems' >
                <div className="userAvatar" >
                    <img className="userAvatar-img"
                        src={selectedImage || "./images/profile.jpg"}
                        alt="Profile Avatar" />
                    <input type="file"
                        id="imageInput"
                        accept="image/*"
                        onChange={handleImageChange} />
                </div>
                <div className="userDetails" >
                    <div className="user-details1" >
                        <h4> Username: </h4>
                        <p> {user.username} </p>
                    </div>
                    <div className="user-details1" >
                        <h4> Name: </h4>
                        <p> {user.Name} </p>
                    </div> {
                    //      <div className="user-details1">
                    //               <h4>Bio:</h4>
                    //               <p>{user.Bio}</p>
                    //             </div> 
                    // } {
                        /* <div className="user-details1">
                                  <h4>Gender:</h4>
                                  <p>{user.Gender}</p>
                                </div>
                                <div className="user-details1">
                                  <h4>Location:</h4>
                                  <p>{user.Location}</p>
                                </div> 
                    } {
                        /* <div className="user-details1">
                                  <h4>Bio Data:</h4>
                                  <p>{user.Bio}</p>
                                </div> */
                    } 
                    <h4> Followers: 2 </h4> { /* <button type="submit">Follow</button> */}
                    {/* <button onClick={() => updateUser({ ...user, profileImage: selectedImage })} >Save Changes </button> */}
                </div>
            </div>
        </div>
    );
}