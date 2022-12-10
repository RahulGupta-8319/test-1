import {useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const navigate = useNavigate()
  const loginData = async(e)=>{
    e.preventDefault()
    console.log(email,password)
    let result = await fetch("http://localhost:3001/login", {
      method:"post",
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({email, password})
    })
    result = await result.json()
    if(result.status== false){
      alert(result.massage)
    }else{
      localStorage.setItem("user", JSON.stringify(result.data))
      localStorage.setItem("token", JSON.stringify(result.token))
      navigate("/")
    }
  }
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input className="input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
        <br />
        <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/><br/>
        <button className="btn" onClick={loginData}>Login</button>
      </form>
    </div>
  );
};

export default Login;
