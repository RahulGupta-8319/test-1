import React from 'react'

const AddStudent = () => {
  return (
    <div className='addStudent'>
         <h1>Add Student</h1>
         <input className='input' type="text" placeholder='Student name' /><br /><br />
         <input className='input' type="text" placeholder='Subject name' /><br /><br />
         <input className='input' type="number" placeholder='marks'/><br /><br />
         <button className='btn'>Add</button>
    </div>
  )
}

export default AddStudent
