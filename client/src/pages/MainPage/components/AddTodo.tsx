import { Dispatch } from "react";
import "../css/addTodo.css"

type AddTodoProps = {
    isAddPage: boolean;
    setIsAddPage: Dispatch<any>;
}

const AddTodo = (props:AddTodoProps) => {
    const {isAddPage} = props;

    const handleAddTodo = () => {
        
    }

    return(
        <div className={`add--todo--bg ${isAddPage?"display--addpage":""}`}>
            <div className="add--todo--container">
                <div className="add__date__type">
                    <input type="date" className="add__inp__date" required/>
                    <select className="add__type__menu">
                        <option value="official">Personal</option>
                        <option value="personal">Official</option>
                        <option value="hobby">Hobby</option>
                    </select>
                </div>
                <h2 className="add__inp__label">Title</h2>
                <input type="text" className="add__inp__title" required/>
                <h2 className="add__inp__label">Description</h2>
                <textarea className="add__inp__desc" required/>
            </div>
            <div className="addtodo--btns--container">
                <button className="addtodo__btn"
                    onClick={()=>handleAddTodo()}
                >+ Add</button>
                <button className="addtodo__btn add__cancel__btn"
                    onClick={() => props.setIsAddPage(false)}
                >Cancel</button>
            </div>
        </div>
    )
}

export default AddTodo;