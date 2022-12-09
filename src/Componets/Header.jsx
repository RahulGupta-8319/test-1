import React from 'react'
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <div>
       <ul className='header-ul'>
        <li><Link to="/"> SignUp</Link></li>
        <li><Link to="/login">Login</Link></li>
       </ul>
    </div>
  )
}

export default Header
