import { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import { Context } from "../context/postContext/Context";
import { AiFillDelete, AiFillEdit } from 'react-icons/Ai'
import './postlist.css'
// import UpdateForm from './UpdateForm'

function PostList() {
    const [showEditForm, setShowEditForm] = useState(false)
    const [posts, setPosts] = useState([])
    const [tempPost, setTempPost] = useState('')
    const { user } = useContext(Context)

    const getPosts = async () => {
        const res = await axios.get("http://localhost:8083/Post",
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
                "http://localhost:8083}/Post/${id}",
            //     { headers: { "Authorization": user.token } }
            )
            alert(res.data.message)
        } catch (error) {
            alert(error.response.data.error)
        }
        getPosts()
    }

    const handleToggle = (data) => {
        setTempPost(data)
        setShowEditForm(!showEditForm)
    }

    return (
        <div className='post_wrapper'>
            {posts.map((post) => (
                <div className="card" key={post.id}>
                    <p>{post.Content }</p>
                    <AiFillDelete className='delIcon' onClick={() => handleDelete(post.id)} />
                    <AiFillEdit className='delIcon' onClick={() => handleToggle(post)} />
                    {showEditForm && <UpdateForm setShowEditForm={setShowEditForm} post={tempPost} getPosts={getPosts} />}
                </div>
            ))}
        </div>
    )
}

export default PostList
