import { Dispatch, useState } from "react";
import { Todo } from "../../../utils/types";
import checkIcon from "../../../assets/check-solid.svg";
import penIcon from "../../../assets/pen-solid.svg";
import trashIcon from "../../../assets/trash-solid.svg";
import xIcon from "../../../assets/xmark-solid.svg";
import { deleteTodoApi, updateTodoApi } from "../../../services/getDataApi";
import { Data } from "../../../utils/types";

type TodoComponentProps = {
    todo: Todo;
    todos: [];
    setData: Dispatch<any>;
    setIsAddPage: Dispatch<any>;
}

const TodoComponent = (props:TodoComponentProps) => {

    const {todo, setData, setIsAddPage} = props;
    const [err, setErr] = useState<string>("");
    
    const handleDelete = async() => {
        setData((prev:Data) => {
            const newTodos = prev.user.todos.filter((t:Todo) => t._id !== todo._id);
            return {
                user: {
                    ...prev.user,
                    todos: newTodos
                }
            }
        })
        try{
            await deleteTodoApi(todo._id);
        } catch(err:any) {
            setErr(err.message);
        }
    }

    const handleCheck = async() => {
        todo.isCompleted = !todo.isCompleted;
        setData((prev:Data) => {
            return{
                user:{
                    ...prev.user,
                    todos: prev.user.todos.map((t:Todo) => {
                        if(t._id === todo._id) {
                            return todo;
                        } else {
                            return t;
                        }
                    })
                }
            }
        })
        try{
            const res = await updateTodoApi(todo);
            console.log(res.data, todo)
        } catch (err:any) {
            setErr(err.message);
        }
    }
    const handleEdit = () => {
        setIsAddPage(todo._id);
    }
    return (
        <div className="todo--container">
            <span className="todo__date">{todo.dueDate}</span>
            <span className="todo__type">{todo.todoType}</span>   
            <p className="todo__title">{todo.title}</p>
            <p className="todo__desc">{todo.desc}</p>
            <div className="todo__icons__container">
                <div className="icon__container check__icon" onClick={()=>handleCheck()}><img src={todo.isCompleted ? xIcon : checkIcon} className="todo__icon"/></div>
                <div className="icon__container edit__icon" onClick={()=>handleEdit()}><img src={penIcon} className="todo__icon"/></div>
                <div className="icon__container delete__icon" onClick={()=>handleDelete()}><img src={trashIcon} className="todo__icon"/></div>
            </div>
            {err && <p className="todo__err">{err}</p>}
        </div>
    )
}

export default TodoComponent;