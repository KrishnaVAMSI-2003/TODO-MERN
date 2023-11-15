import { Dispatch, useEffect, useState, } from "react";
import "../css/addTodo.css"
import { Data } from "../../../utils/types";
import { addTodoApi, updateTodoApi } from "../../../services/getDataApi";

type AddTodoProps = {
    isAddPage: String;
    setIsAddPage: Dispatch<any>;
    data: Data;
}

type InpTodo = {
    todoId?: string;
    title: string;
    desc: string;
    todoType: string;
    dueDate: string;

}

const AddTodo = (props:AddTodoProps) => {
    const {isAddPage, data, setIsAddPage} = props;
    const [err, setErr] = useState<string>("");
    const [inpTodo, setInpTodo] = useState<InpTodo>({
        title: "",
        desc: "",
        todoType: "",
        dueDate: ""
    })
    useEffect(() => {
        if(isAddPage.length > 3) {
            setInpTodo(()=>data.user.todos.filter(((t:any) => t._id === isAddPage))[0])
        } else{
            setInpTodo({
                title: "",
                desc: "",
                todoType: "",
                dueDate: ""
            })
        }
        setErr("");
    },[isAddPage])
    const handleDateChange = (e:any) => {
        setInpTodo((prev: any)=> {
            return {
                ...prev,
                dueDate: e.target.value
            }
        })
    }
    const handleTypeChange = (e:any) => {
        setInpTodo((prev: any)=> {
            return {
                ...prev,
                todoType: e.target.value
            }
        })
    }
    const handleDescChange = (e:any) => {
        setInpTodo((prev: any)=> {
            return {
                ...prev,
                desc: e.target.value
            }
        })
    }
    const handleTitleChange = (e:any) => {
        setInpTodo((prev: any)=> {
            return {
                ...prev,
                title: e.target.value
            }
        })
    }

    const handleSubmit = async() => {
        setErr("Processing...")
        try{
            const res = isAddPage.length>3 ? await updateTodoApi(inpTodo) : await addTodoApi(inpTodo);
            setErr("processing please wait!")
            if(res.status===200){
                setIsAddPage("");
                setInpTodo({
                    title: "",
                    desc: "",
                    todoType: "",
                    dueDate: ""
                })
            }
        } catch (err:any) {
            setErr("Fill all the fields to proceed! "+err?.message);
        }
    }
    return(
        <div className={`add--todo--bg ${isAddPage && "display--addpage"}`}>
            <div className="add--todo--container">
                <div className="add__date__type">
                    <input type="date" className="add__inp__date" required onChange={(e)=>handleDateChange(e)} defaultValue={inpTodo?.dueDate}/>
                    <select className="add__type__menu" defaultValue={inpTodo?.todoType} onChange={(e)=>handleTypeChange(e)}>
                        <option value="">Select</option>
                        <option value="personal">Personal</option>
                        <option value="official">Official</option>
                        <option value="hobby">Hobby</option>
                    </select>
                </div>
                <h2 className="add__inp__label">Title</h2>
                <input type="text" className="add__inp__title" onChange={e=>handleTitleChange(e)} value={inpTodo?.title} required/>
                <h2 className="add__inp__label">Description</h2>
                <textarea className="add__inp__desc" onChange={e=>handleDescChange(e)} value={inpTodo?.desc} required/>
            </div>
            <div className="addtodo--btns--container">
                <button className="addtodo__btn"
                    onClick={()=>handleSubmit()}
                >{isAddPage.length > 3 ? "Edit":"Add"}</button>
                <button className="addtodo__btn add__cancel__btn"
                    onClick={() => props.setIsAddPage("")}
                >Cancel</button>
            </div>
            {err && <p className="addtodo__err">{err}</p>}
        </div>
    )
}

export default AddTodo;