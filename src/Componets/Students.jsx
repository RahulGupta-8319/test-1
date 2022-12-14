import React from 'react'
import {useEffect} from 'react';

const Students = () => {
  useEffect(() =>{
    getStudent()
  }, [])
  const getStudent = async () =>{
    let id =JSON.parse( localStorage.getItem("teacher") )
    console.log(id);
    let result = await fetch(`http://localhost:3001/student/${id}` ,
     {headers:{
      authorization:JSON.parse(localStorage.getItem("token"))

     }})
     result = await result.json()
     console.log(result, "**");
    
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
