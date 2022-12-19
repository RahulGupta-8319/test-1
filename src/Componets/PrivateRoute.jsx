import React from 'react'
import {Outlet,Navigate} from "react-router-dom"
const PrivateRoute = () => {
    const teacher = localStorage.getItem("teacher")
  return teacher ? <Outlet/>:<Navigate to = "/login"/>
    
 
}

export default PrivateRoute
