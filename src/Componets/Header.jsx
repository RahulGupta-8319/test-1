import React from 'react'
import {Link, useNavigate} from "react-router-dom"
const Header = () => {
  let navigate = useNavigate()
  const teacher = localStorage.getItem("teacher")
  const logout = () =>{
    localStorage.clear()
    navigate('/signUp')
  }

 
  return (
    
    <div>
      { teacher?
      <ul className='header-ul header-right'>
        <li><Link to='/'>Student</Link></li>
        <li><Link to='/addStudent'>AddStudent</Link></li>
        <li><Link to='/updateStudent'>UpdateStudent</Link></li>
        <li><Link onClick={logout} to='/signUp'>Logout</Link></li>
      </ul>
      :
       <ul className='header-ul'>
        <li><Link to="/signUp"> SignUp</Link></li>
        <li><Link to="/login">Login</Link></li>
       </ul>
     }   
    </div>

  )
}

export default Header
