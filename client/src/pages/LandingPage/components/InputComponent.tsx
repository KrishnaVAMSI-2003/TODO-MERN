import { Dispatch } from "react"

type inputProps = {
    type: string,
    setUser: Dispatch<any>,
    user: {
        username?: string,
        email: string,
        password: string
    },
    label: string,
}

const InputComponent = (props: inputProps) => {
    const {type, setUser, user, label} = props;
    const handleChange = (e: any) => {
        if(label==="Username") setUser({...user, username: e.target.value})
        else if(label==="Email") setUser({...user, email: e.target.value})
        else if(label==="Password") setUser({...user, password: e.target.value})
    }
    return (
        <div className="inp--container">
            <input type={type} className="auth__inp" required
                onChange={(e)=>{handleChange(e)}}
            />
            <label>{label}</label>
        </div>
    )
}

export default InputComponent;