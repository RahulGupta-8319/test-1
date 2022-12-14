import React from 'react'
import { useEffect, useState } from 'react';
// import Students from './Students';
import { Link } from 'react-router-dom';

const Students = () => {

  let [StudentData, setStudentData] = useState([])
  let [name, setName] = useState("")
  let [subject, setSubject] = useState("")



  useEffect(() =>{ getStudent() }, [])

  const getStudent = async () =>{
    let id =JSON.parse( localStorage.getItem("teacher") )
    console.log(id);
    let result = await fetch(`http://localhost:3001/student/${id}` ,
     {headers:{
      authorization:JSON.parse(localStorage.getItem("token"))

     }})
     result = await result.json()
     if(result.status === false){
      alert(result.msg)
     }else{
       console.log(result.data, "**");
      setStudentData(result.data)
     }   
  }

  const deleteStudent = async(studentId) =>{
    let id = localStorage.getItem('teacher')
    let result = await fetch(`http://localhost:3001/student/${id}`,{
      method:'delete',
      body:JSON.stringify({studentId}),
      headers:{
        'Content-Type':'application/json',
        authorization:JSON.parse(localStorage.getItem("token"))
       }

    })
    result =await result.json()

    if(result.status === false){
      alert(result.msg)
    }else{
      alert("successfully deleted")
      getStudent() 
    }
  }

  async function searchStudent(){
    console.log(name, subject);
    let id = JSON.parse( localStorage.getItem('teacher'))
    let res = await fetch(`http://localhost:3001/student/${id}?name=${name}&subject=${subject}`, {
      method:"get",
      headers:{
        authorization:JSON.parse(localStorage.getItem("token"))
      }
    })
    res = await res.json()

    if(res.status == false){
      setStudentData([])
    }else{
      setStudentData(res.data)
    }
  }



  return (
    <div className='sttudentList'>
      <div className='search'>
      <input type="text" placeholder='Enter Name' value={name} onChange={(e)=> setName(e.target.value)}/>
      <input type="text"placeholder='Enter Subject' value={subject} onChange={(e)=> setSubject(e.target.value)}/>
      <button onClick={searchStudent}>Search</button>
      <button onClick={getStudent}>All Students</button>
      </div>
      <h1>Students-details</h1>

      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Subject</li>
        <li>Marks</li>
        <li>Update</li>
        <li>Delete</li>
      </ul>
      {
        StudentData.length > 0 ?
              StudentData.map( (item, i) => 
                <ul key={item._id}>
                  <li>{i+1}</li>
                  <li>{item.name}</li>
                  <li>{item.subject}</li>
                  <li>{item.marks}</li>
                  <li><Link to= {'/updateStudent/'+ item._id}  ><div>Update</div></Link></li>
                  <li><button onClick={ () => deleteStudent(item._id)}>Delete</button></li>
                </ul>

              )
              : <h1>No Students available</h1>
      }

     
    </div>
  )
}

export default Students
