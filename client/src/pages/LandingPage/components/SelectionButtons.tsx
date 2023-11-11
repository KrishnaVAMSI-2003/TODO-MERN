import { Dispatch } from "react";

type SelectionButtonsProps = {
    login: boolean,
    setLogin: Dispatch<any>
}
const SelectionButtons = (props: SelectionButtonsProps) => {
    const {login, setLogin} = props;
    return (
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
    )
}

export default SelectionButtons;