import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/user.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/keyhole.png'

const LoginSignup = () => {

  const [action,setAction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='container'>
      <div className='header'>
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div> </div>:<div className="input">
          <img src={user_icon} style={{ width: "20px", height: "20px" }} alt="" />
          <input type="text" placeholder='Name' />
        </div> }
        
        <div className="input">
          <img src={email_icon} style={{ width: "20px", height: "20px" }} alt="" />
          <input type="email" placeholder='Email' />
        </div> 
        <div className="input">
          <img src={password_icon} style={{ width: "20px", height: "20px" }} alt="" />
          <input type="password" placeholder='Password'/>
        </div>  
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>(setAction("Sign Up"))}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>(setAction("Login"))}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup