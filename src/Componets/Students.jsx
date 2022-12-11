import React from 'react'
import { useState } from 'react';
import {useEffect} from 'react';

const Students = () => {
  const [student,setStudent] = useState([])
  useEffect(() =>{
    getStudent()
  }, [])
  const getStudent = async () =>{
    let id = localStorage.getItem("teacher")
    console.log(JSON.parse(id));
    let result = await fetch(`http://localhost:3001/student/${id}` ,
     {headers:{
      authorization:JSON.parse(localStorage.getItem("token"))

     }})
     result = await result.json()
     if(result.status == false){
       alert(result.msg)
     }else{
         setStudent(result.data)
     }
     console.log(result, "**");
    
  }


  return (
    <div className='sttudentList'>
      <h1>Students-details</h1>
      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Subject</li>
        <li>Marks</li>
        <li>Update</li>
        <li>Delete</li>
      </ul>

     
    </div>
  )
}

export default Students
