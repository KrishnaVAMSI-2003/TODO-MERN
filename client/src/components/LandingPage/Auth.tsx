import { useState } from "react";
import "./auth.css";

const Auth = () => {
    const [login, setLogin] = useState<boolean>(true);
    return (
        <div className="auth--container">
            <div className="select--btns--container">
                <button 
                    className={`${login?"select__btn__setbg":""} select__btn`}
                    onClick={()=>setLogin(true)}
                >Login</button>
                <button 
                    className={`${login?"":"select__btn__setbg"} select__btn`}
                    onClick={()=>setLogin(false)}
                >signup</button>
            </div>

            <h1>{login?"Login":"Signup"}</h1>

            {
                login?<div></div> : 
                <div className="inp--container">
                    <input type="text" className="auth__inp" required/>
                    <label>Username</label>
                </div>
            }

            <div className="inp--container">
                <input type="email" className="auth__inp" required/>
                <label>Email</label>
            </div>
            <div className="inp--container">
                <input type="password" className="auth__inp" required/>
                <label>Password</label>
                {
                    login && <p className="frgt__pwd__txt">forgot?</p>
                }
            </div>
            <button className="auth__btn" onClick={()=>{}}>{login?"Login":"Signup"}</button>
        </div>
    )
}

export default Auth;