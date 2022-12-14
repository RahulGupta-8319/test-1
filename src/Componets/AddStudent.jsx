import {useState} from 'react'

const AddStudent = () => {
  let [name , setName] = useState("")
  let [subject , setSubject] = useState('')
  let [marks , setMarks] = useState('')

  async function addStudent(e){
    e.preventDefault()
    console.log(name, subject, marks);
    let id =  localStorage.getItem("teacher") 
    console.log(id)

    let result = await fetch(`http://localhost:3001/student/${id}`,{
      method:"post",
      headers: {'Content-Type' : 'application/json',
                authorization:JSON.parse(localStorage.getItem("token"))
    },
      body:JSON.stringify ({name, subject, marks})
    })

    result = await result.json()
    
    if(result.status === false){
      alert(result.msg)
    }else{
      alert('added successfully')
      console.log(result);
    }
  }

  return (
    <div className='addStudent'>
         <h1>Add Student</h1>
         <input className='input' type="text"   placeholder='Student name' value={name}    onChange={ (e) => setName( e.target.value)}/><br /><br />
         <input className='input' type="text"   placeholder='Subject name' value={subject} onChange={ (e) => setSubject( e.target.value)}/><br /><br />
         <input className='input' type="number" placeholder='marks'        value={marks}   onChange={ (e) => setMarks( e.target.value)}/><br /><br />

         <button className='btn' onClick={addStudent}>Add</button>
    </div>
  )
}

export default AddStudent
