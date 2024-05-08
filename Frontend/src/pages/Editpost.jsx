import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import '../components/css/Editpost.css'

// components
import Nav from '../components/CreatePage/Nav'

// axios
import axios from 'axios'

function Editpost() {
    const { id } = useParams();
    const [name, setName] = useState()
    const [content, setContent] = useState()

    const updatePostValue = (value, setValue, element) => {
        setValue(value)
        element.value = value
    }

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

    const handleUpdate = () => {
        if (name && content) {
            axios.put(`http://localhost:3000/post/${id}`, { data: createPostModel() })
            .then(res => {
                console.log(res.data);
                if (res.data.updateSuccess) {
                    window.location.href = 'http://localhost:5173';
                }
            })
            .catch(error => console.log(error))
        }
    }

    const handleDelete = () => {
        if (name && content) {
            axios.delete(`http://localhost:3000/post/${id}`)
            .then(res => {
                if (res.data.deleteSuccess) {
                    window.location.href = 'http://localhost:5173';
                }
            })
            .catch(error => console.log(error))
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:3000/post/${id}`)
            .then(res => {
                updatePostValue(res.data.name, setName, document.querySelector('input'))
                updatePostValue(res.data.content, setContent, document.querySelector('textarea'))
            })
            .catch(error => {
            console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='create-post'>
            <Nav/>
            <main>
                <div className='button-line'>
                    <button onClick={handleUpdate} className='update-button'>Update</button>
                    <button onClick={handleDelete} className='delete-button'>Delete</button>
                </div>
                <input id='input' type="text" placeholder='Name writer' onChange={(e) => setName(e.target.value)}/>
                <textarea id="textarea" cols="30" rows="10" placeholder='What on your mind?' onChange={(e) => setContent(e.target.value)}></textarea>
            </main>
        </div>
    )
}

export default Editpost