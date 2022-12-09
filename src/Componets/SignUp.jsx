import React from 'react'

const SignUp = () => {
  return (
    <div className='signup'>
    <h1>Sign Up</h1>
      <form>
        <input className='input' type="text" placeholder='Name' /><br/><br/>
        <input className='input' type="email" placeholder='Email' /><br/><br/>
        <input className='input' type="number" placeholder='Mobile' />  <br/><br/>
        <input className='input' type="password" placeholder='PassWord' /><br/><br/>
        <button className='btn'>Register</button>
      
      </form>
    </div>
  )
}

export default SignUp
