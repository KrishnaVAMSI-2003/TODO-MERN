import TodoComponent from "./TodoComponent";
import { Todo } from "../../../utils/types";

type TodoListProps = {
    todos: [];
}

const TodoList = (props: TodoListProps) => {
    const {todos} = props;
    return (
        <div className="todolist--container">
            {todos.map((todo:Todo) => {
                return <TodoComponent key={todo._id} todo={todo}/>
            })}
        </div>
    )
}

export default TodoList;