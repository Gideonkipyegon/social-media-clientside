import { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import { Context } from "../context/postContext/Context";
import { AiFillDelete, AiFillEdit,AiFillLike} from 'react-icons/Ai'
import {FaRegCommentAlt} from 'react-icons/Fa'
import { apidomain } from '../utils/domain';
import './postlist.css'
import UpdateForm from './UpdateForm'

function PostList() {
    const [showEditForm, setShowEditForm] = useState(false)
    const [posts, setPosts] = useState([])
    const [tempPost, setTempPost] = useState('')
    const { user } = useContext(Context)

    const getPosts = async () => {
        const res = await axios.get(`${apidomain}/Post`,
            // { headers: { "Authorization": user.token } }
        )
        setPosts(res.data)
    }

    useEffect(() => {
        getPosts()
    }, [])

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(
                `${apidomain}/Post/${id}`,
                // { headers: { "Authorization": user.token } }
            )
            alert(res.data.message)
        } catch (error) {
            console.log(error)
            alert(error.response.data.error)
        }
        getPosts()
    }
    const handleLike = async (id) => {
        try {
            const res = await axios.Like(
                `${apidomain}/Like/${id}`,
                // { headers: { "Authorization": user.token } }
            )
            alert(res.data.message)
        } catch (error) {
            console.log(error)
            alert(error.response.data.error)
        }
        getLikes()
    }
    // const handleDelete = async (id) => {
    //     try {
    //         const res = await axios.delete(`${apidomain}/Post/${id}`);
    //         alert(res.data.message);
    //     } catch (error) {
    //         console.log(error);
    //         if (error.response) {
    //             alert(error.response.data.error);
    //         } else {
    //             alert("An error occurred while processing your request.");
    //         }
    //     }
    //     getPosts();
    // };
    

    const handleToggle = (data) => {
        setTempPost(data)
        setShowEditForm(!showEditForm)
    }

    return (
        <div className='post_wrapper'>
            {posts.map((post) => (
                <div className="card" key={post.id}>
                    <p>{post.Content }</p>
                    <div className='icons'>
                    <AiFillLike className='delIcon' onClick={() => handleLike(Like.id)} />
                    <FaRegCommentAlt className='delIcon' onClick={() => handleComment(Comment.id)}  />
                    {/* <AiFillEdit className='delIcon' onClick={() => handleToggle(post)} /> */}
                    {showEditForm && <UpdateForm setShowEditForm={setShowEditForm} post={tempPost} getPosts={getPosts} />}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostList
