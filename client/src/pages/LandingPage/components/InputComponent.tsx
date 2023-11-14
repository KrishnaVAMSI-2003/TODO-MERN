import { Dispatch, useState } from "react"

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
    const [inpvalue, setValue] = useState<string>("");
    const {type, setUser, user, label} = props;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setUser({...user, [label.toLowerCase()]: e.target.value});
    }
    return (
        <div className="inp--container">
            <input type={type} value={inpvalue} className="auth__inp" required
                onChange={(e)=>{handleChange(e)}}
            />
            <label>{label}</label>
        </div>
    )
}

export default InputComponent;