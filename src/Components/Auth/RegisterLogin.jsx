import React, { useState } from "react";
import './RegisterLogin.css';

import userIcon from "./Assets/person.png";
import emailIcon from "./Assets/email.png";
import passwordIcon from "./Assets/password.png";

const LoginSignup = ()=>{

    const [action,setAction] = useState("Sign Up")

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === 'Login'?<div></div>:<div className="input">
                    <img src={userIcon} alt="Name-Image"></img>
                    <input type="text" placeholder="Name"/>
                </div>}
                
                <div className="input">
                    <img src={emailIcon} alt="Email-Image"></img>
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="input">
                    <img src={passwordIcon} alt="Password-Image"></img>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forget-password">Lost Password? <span>Click Here!</span></div>}
            
            <div className="submit-container">
                <div className={action === "Login"? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up"? "submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}

export default LoginSignup;