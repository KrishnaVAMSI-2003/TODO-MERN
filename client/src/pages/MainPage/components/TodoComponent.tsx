import { Todo } from "../../../utils/types";

type TodoComponentProps = {
    todo: Todo;
}

const TodoComponent = (props:TodoComponentProps) => {
    const {todo} = props;
    console.log(todo);
    return (
        <div className="todo--container">
            <span className="todo__date">{todo.dueDate}</span>
            <span className="todo__type">{todo.todoType}</span>   
            <p className="todo__title">{todo.title}</p>
            <p className="todo__desc">{todo.desc}</p>
        </div>
    )
}

export default TodoComponent;