import TodoComponent from "./TodoComponent";
import { Todo } from "../../../utils/types";
import { Dispatch } from "react";

type TodoListProps = {
    todos: [];
    setData: Dispatch<any>;
    setIsAddPage: Dispatch<any>;
}

const TodoList = (props: TodoListProps) => {
    const {todos, setData, setIsAddPage} = props;
    return (
        <div className="todolist--container">
            {todos.map((todo:Todo) => {
                return <TodoComponent key={todo._id} todo={todo} todos={todos} setData={setData} setIsAddPage={setIsAddPage}/>
            })}
        </div>
    )
}

export default TodoList;