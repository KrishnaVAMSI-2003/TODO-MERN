import { Dispatch } from "react";
import "../css/body.css"
import SideBar from "./SideBar";
import TodoList from "./TodoList";
import { Data } from "../../../utils/types";

type BodyProps = {
    setIsAddPage: Dispatch<any>;
    data: Data;
    setData: Dispatch<any>;
}

const Body = (props:BodyProps) => {
    const {setIsAddPage, data, setData} = props;
    return (
        <div className="body--container">
            <TodoList todos={data.user.todos} setData={setData} setIsAddPage={setIsAddPage}/>
            <SideBar setIsAddPage={setIsAddPage} userDetails={data.user}/>
        </div>
    )
}

export default Body;