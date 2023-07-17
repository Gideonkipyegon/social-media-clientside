import { useContext, useEffect, useState } from 'react'
import { apidomain } from '../utils/domain';
import axios from 'axios'
import { Context } from '../context/userContext/Context'
import './updateform.css'


const UpdateForm = ({ setShowEditForm, post, getPosts }) => {
    const [Content, setContent] = useState('')

    useEffect(() => {
        setContent(post.Content)
    }, [])


    const { user } = useContext(Context)
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`${apidomain}/Post/${post.id}`, { Content: Content },
            // { headers: { "Authorization": `${user.token}` } }
        ).then((res) => {
            getPosts()
            alert(res.data.message)

        }).catch(({ response }) => {
            console.log('error')
            // alert(response.response.data.error)
        })
    }
    return (
        <div className='updateForm'>
            <form className='form'>
                <textarea value={Content} onChange={(e) => setContent(e.target.value)}
                    name="Content"
                    id="Content"
                ></textarea>
                <div className="btn-wrapper">
                    <button onClick={() => setShowEditForm(false)}>exit</button>
                    <button type='submit' onClick={handleSubmit}>Add</button>
                </div>
            </form>
        </div>
    )
}
export default UpdateForm