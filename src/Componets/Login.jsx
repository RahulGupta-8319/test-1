import React from "react";

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input className="input" type="email" placeholder="Email" /> <br />
        <br />
        <input className="input" type="password" placeholder="Password" /><br/><br/>
        <button className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
