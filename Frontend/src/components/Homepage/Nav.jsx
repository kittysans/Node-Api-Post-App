import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='nav'>
            <div className="logo">
                <h3>LOGO</h3>
            </div>
            <Link to={'/create-post'} className='button'>Create Post</Link>
        </div>
    )
}

export default Nav