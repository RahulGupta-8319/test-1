import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [name , setName] = useState("")
  const [mobile , setMobile] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  // const navigate = useNavigate()

  const collectData = async (e) =>{
    e.preventDefault()
    console.log(name, mobile, email, password);
    let result = await fetch("http://localhost:3001/signUp", {
      method:"post",
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({name, mobile, email, password})
    })
    result = await result.json()
    console.log(result);

    if(result.status == false){
      alert(result.msg)
    }else{
      console.log(result);
    }
    // navigate("/login")
  }

  return (
    <div className='signup'>
    <h1>Sign Up</h1>
      <form>
        <input className='input' type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} /><br/><br/>
        <input className='input' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /><br/><br/>
        <input className='input' type="number" placeholder='Mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} />  <br/><br/>
        <input className='input' type="password" placeholder='PassWord' value={password} onChange={(e) => setPassword(e.target.value)} /><br/><br/>
        <button className='btn' onClick={collectData}>Register</button>
      
      </form>
    </div>
  )
}

export default SignUp
