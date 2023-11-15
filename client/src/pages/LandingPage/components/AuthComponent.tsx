import { useEffect, useState } from "react";
import "../css/authComponent.css";
import { loginApi, signupApi } from "../../../services/authApi";
import InputComponent from "./InputComponent";
import SelectionButtons from "./SelectionButtons";
import { useNavigate } from "react-router-dom";


type AuthUser = {
    username?: string,
    email: string,
    password: string
}

const Auth = () => {
    
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("token")) { navigate("/main") }
    },[])

    const [login, setLogin] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const [authUser, setAuthUser] = useState<AuthUser>({ username: "", email: "", password: "" });

    const loginHandler = async() => {
        setError("Validating credentials, PLEASE WAIT...");
        try{
            const result = login ? await loginApi(authUser) : await signupApi(authUser);
            if(result.status === 200) {
                localStorage.setItem("token", result.data.token);
            }
            
            navigate("/main")
        } catch(err: any) {
            if(err.response) {
                setError(err.response.data.errors[0].msg)
            }
        }
    }

    return (
        <div className="auth--container">
            <SelectionButtons login={login} setLogin={setLogin}/> 
            <h1>{login?"Login":"Signup"}</h1>
            { login ? <div></div> : <InputComponent type="text" setUser={setAuthUser} user={authUser} label="Username"/> }
            <InputComponent type="text" setUser={setAuthUser} user={authUser} label="Email"/>
            <InputComponent type="password" setUser={setAuthUser} user={authUser} label="Password"/>
            <button className="auth__btn" onClick={()=>loginHandler()}>{login?"Login":"Signup"}</button>
            {error && <p className="error__txt">{error}</p>}
        </div>
    )
}

export default Auth;