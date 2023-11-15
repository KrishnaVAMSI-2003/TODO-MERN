import TodoComponent from "./TodoComponent";
import { Todo } from "../../../utils/types";
import { Dispatch } from "react";

type TodoListProps = {
    todos: [];
    setData: Dispatch<any>;
    setIsAddPage: Dispatch<any>;
    filterArray: string[];
}

const TodoList = (props: TodoListProps) => {
    const {todos, setData, setIsAddPage, filterArray} = props;
    const date = new Date(new Date().toDateString());
    return (
        <div className="todolist--container">
            {todos.length===0 &&<h2 className="empty__todo__msg">Add tasks to display</h2> }
            {todos.map((todo:Todo) => {
                const todoDate = new Date(new Date(todo.dueDate).toDateString());
                if(filterArray.includes("Today") && (+(date) - +(todoDate)!=0)) return;
                if(filterArray.includes("Due") && (todo.isCompleted===true || (+(date) - +(todoDate)<0))) return;
                if(filterArray.includes("Active") && (todo.isCompleted===true || (+(date) - +(todoDate)>0))) return;
                if(filterArray.includes("Completed") && !todo.isCompleted) return
                return <TodoComponent key={todo._id} todo={todo} todos={todos} setData={setData} setIsAddPage={setIsAddPage}/>
            })}
        </div>
    )
}

export default TodoList;