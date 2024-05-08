import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Post.css'

// icons
import { MdOutlineEdit } from "react-icons/md";

function Post( props ) {
  const { name, content, _id } = props.data

  return (
    <div className='post'>
      <header>
        <div>{name}</div>
        <Link to={`/post/${_id}`}><MdOutlineEdit className='edit-icon'/></Link>
      </header>
      <main>{content}</main>
      {/* <img src="" alt="" /> */}
    </div>
  )
}

export default Post