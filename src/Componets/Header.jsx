import React from 'react'
import {Link,useNavigate} from "react-router-dom"
const Header = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate()
  const logout = ()=>{
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div>
      {
       auth ?
       <ul className='header-ul header-ul2' >
        <li><Link>Student List</Link> </li>
        <li><Link>Add Student</Link> </li>
        <li><Link>Update Student</Link> </li>
        <li><Link onClick={logout} to="/login">Logout</Link></li>
       </ul>
       :<ul className='header-ul'>
        <li><Link to="/signup"> SignUp</Link></li>
        <li><Link to="/login">Login</Link></li>
       </ul>

      } 
       
    </div>
  )
}

export default Header
