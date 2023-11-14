import { useState } from "react";
import { Todo } from "../../../utils/types";
import checkIcon from "../../../assets/check-solid.svg";
import penIcon from "../../../assets/pen-solid.svg";
import trashIcon from "../../../assets/trash-solid.svg";
import { deleteTodoApi } from "../../../services/getDataApi";

type TodoComponentProps = {
    todo: Todo;
}

const TodoComponent = (props:TodoComponentProps) => {

    const {todo} = props;
    const [err, setErr] = useState<string>("");
    
    const handleDelete = async() => {
        try{
            await deleteTodoApi(todo._id);
        } catch(err:any) {
            setErr(err.message);
        }
    }
    return (
        <div className="todo--container">
            <span className="todo__date">{todo.dueDate}</span>
            <span className="todo__type">{todo.todoType}</span>   
            <p className="todo__title">{todo.title}</p>
            <p className="todo__desc">{todo.desc}</p>
            <div className="todo__icons__container">
                <div className="icon__container check__icon"><img src={checkIcon} className="todo__icon"/></div>
                <div className="icon__container edit__icon"><img src={penIcon} className="todo__icon"/></div>
                <div className="icon__container delete__icon" onClick={()=>handleDelete()}><img src={trashIcon} className="todo__icon"/></div>
            </div>
            {err && <p className="todo__err">{err}</p>}
        </div>
    )
}

export default TodoComponent;