import { useState } from 'react'

// css
import '../components/css/Createpost.css'

// components
import Nav from '../components/CreatePage/Nav'

// axios
import axios from 'axios'

function Createpost() {
    const [name, setName] = useState(null)
    const [content, setContent] = useState(null)

    const createPostModel = () => {
        let data = {
            name: name,
            content: content,
            likes: 0,
            comments: {
                count: 0,
                comment: [] 
            },
        }
        return data
    }

    const handlePost = () => {
        if (name && content) {
            axios.post('http://localhost:3000/post', { data: createPostModel() })
            .then(res => {
                if (res.data.postSuccess) {
                    window.location.href = 'http://localhost:5173';
                }
            })
            .catch(error => console.log(error))
        }
    }

    return (
        <div className='create-post'>
            <Nav/>
            <main>
                <button onClick={handlePost}>Post</button>
                <input id='input' type="text" placeholder='Name writer' onChange={(e) => setName(e.target.value)}/>
                <textarea id="textarea" cols="30" rows="10" placeholder='What on your mind?' onChange={(e) => setContent(e.target.value)}></textarea>
            </main>
        </div>
    )
}

export default Createpost