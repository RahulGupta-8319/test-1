import React from 'react'
import { useState } from 'react'

const AddStudent = () => {
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [marks, setMarks] = useState("")
  const collectData = async(e)=>{
    e.preventDefault()
    console.log(name.subject,marks);
  }
  return (
    <div className='addStudent'>
         <h1>Add Student</h1>
         <form>
         <input className='input' type="text" placeholder='Student name' value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
         <input className='input' type="text" placeholder='Subject name' value={subject} onChange={(e) => setSubject(e.target.value)}/><br /><br />
         <input className='input' type="number" placeholder='marks' value={marks} onChange={(e) => setMarks(e.target.value)}/><br /><br />
         <button onClick={collectData} className='btn'>Add</button>
         </form>
    </div>
  )
}

export default AddStudent
