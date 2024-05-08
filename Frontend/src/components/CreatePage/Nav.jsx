import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='nav'>
            <div className="logo">
                <h3>LOGO</h3>
            </div>
            <Link to={'/'} className='button'>Home</Link>
        </div>
    )
}

export default Nav