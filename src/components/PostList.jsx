// import { useEffect, useContext, useState } from 'react';
// import axios from 'axios';
// import { Context } from '../context/postContext/Context';
// import { AiFillDelete, AiFillEdit, AiFillLike } from 'react-icons/Ai';
// import { FaRegCommentAlt } from 'react-icons/Fa';
// import { apidomain } from '../utils/domain';
// import './postlist.css';
// import UpdateForm from './UpdateForm';
// // import Comment from '../pages/Comment';

// function PostList() {
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [posts, setPosts] = useState([]);
//   const [tempPost, setTempPost] = useState('');
//   const { user } = useContext(Context);

//   useEffect(() => {
//     getPosts();
//   }, []);

//   const getPosts = async () => {
//     try {
//       const res = await axios.get(`${apidomain}/Post`);
//       setPosts(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const res = await axios.delete(`${apidomain}/Post/${id}`);
//       alert(res.data.message);
//       getPosts();
//     } catch (error) {
//       console.log(error);
//       alert(error.response?.data?.error || 'An error occurred while processing your request.');
//     }
//   };

//   const handleLike = async (id) => {
//     try {
//       await axios.post(`${apidomain}/Like/${id}`, {}, {
//         headers: {
//           Authorization: user.token,
//          }, 

//         });
//       // Optional: You can update the post locally instead of calling getPosts()
//       const updatedPosts = posts.map((post) => {
//         if (post.id === id) {
//           return {
//             ...post,
//             likes: post.likes + 1,
//           };
//         }
//         return post;
//       });
//       setPosts(updatedPosts);
//     } catch (error) {
//       console.log(error);
//       alert(error.response?.data?.error || 'An error occurred while processing your request.');
//     }
//   };

//   const handleComment = async (id) => {
//     // Implement the comment functionality in a similar way to handleLike
//   };

//   const handleToggle = (data) => {
//     setTempPost(data);
//     setShowEditForm(!showEditForm);
//   };

//   return (
//     <div className="post_wrapper">
//       {posts.map((post) => (
//         <div className="card" key={post.id}>
//           <p>{post.Content}</p>
//           <div className="icons">
//             <div className='icons1'>

//             <AiFillLike
//               className="delIcon"
//               onClick={() => handleLike(post.id)}
//             />{' '}
//             <p style={{ color: 'black', display: 'flex', justifyContent: 'start' }}>
//               Like ({post.likes})
//             </p>
//             </div>
//             <div className='icons1'>
//             <FaRegCommentAlt
//               className="delIcon"
//               onClick={() => handleComment(post.id)}
//             />{' '}
//             <p style={{ color: 'black' }}>Comment ({post.comments})</p>
//             </div>
//             <AiFillEdit
//               className="delIcon"
//               onClick={() => handleToggle(post)}
//             />
//             {showEditForm && (
//               <UpdateForm
//                 setShowEditForm={setShowEditForm}
//                 post={tempPost}
//                 getPosts={getPosts}
//               />
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PostList;




import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../context/postContext/Context';
// import { Context } from '../context/userContext/Context';
import { AiFillDelete, AiFillEdit, AiFillLike } from 'react-icons/Ai';
import { FaRegCommentAlt } from 'react-icons/Fa';
import { apidomain } from '../utils/domain';
import './postlist.css';
import UpdateForm from './UpdateForm';

function PostList() {
  const [showEditForm, setShowEditForm] = useState(false);
  const [posts, setPosts] = useState([]);
  const [tempPost, setTempPost] = useState('');
  const { user } = useContext(Context);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const res = await axios.get(`${apidomain}/Post`);
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${apidomain}/Post/${id}`);
      alert(res.data.message);
      getPosts();
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.error || 'An error occurred while processing your request.');
    }
  };

  const handleLikes = async (id) => {
    if (!user || !user.token) {
      console.log('User token not available.');
      return;
    }

    try {
      await axios.post(
        `${apidomain}/Likes/${id}`,
        {},
        {
          headers: {
            Authorization: user.token
            ,
          },
      }
      );

      // Find the index of the post being liked in the 'posts' state array
      const postIndex = posts.findIndex((post) => post.id === id);

      if (postIndex !== -1) {
        // Create a copy of the 'posts' state array to avoid directly modifying state
        const updatedPosts = [...posts];

        // Increment the likes count of the liked post
        updatedPosts[postIndex].likes += 1;

        // Update the 'posts' state with the updated array
        setPosts(updatedPosts);
      }
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.error || 'An error occurred while processing your request.'
      );
    }
  };

  const handleComment = async (id) => {
    // Implement the comment functionality in a similar way to handleLike
  };

  const handleToggle = (data) => {
    setTempPost(data);
    setShowEditForm(!showEditForm);
  };

  return (
    <div className="post_wrapper">
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <p>{post.Content}</p>
          <div className="icons">
            <div className='icons1'>
              <AiFillLike
                className="delIcon"
                onClick={() => handleLikes(post.id)}
              />{' '}
              <p style={{ color: 'black', display: 'flex', justifyContent: 'start' }}>
                Like ({post.likes})
              </p>
            </div>
            <div className='icons1'>
              <FaRegCommentAlt
                className="delIcon"
                onClick={() => handleComment(post.id)}
              />{' '}
              <p style={{ color: 'black' }}>Comment ({post.comments})</p>
            </div>
            <AiFillEdit
              className="delIcon"
              onClick={() => handleToggle(post)}
            />
            {showEditForm && (
              <UpdateForm
                setShowEditForm={setShowEditForm}
                post={tempPost}
                getPosts={getPosts}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
