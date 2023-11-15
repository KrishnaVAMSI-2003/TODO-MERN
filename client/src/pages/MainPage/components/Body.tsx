import { Dispatch } from "react";
import "../css/body.css"
import SideBar from "./SideBar";
import TodoList from "./TodoList";
import { Data } from "../../../utils/types";

type BodyProps = {
    setIsAddPage: Dispatch<any>;
    data: Data;
    setData: Dispatch<any>;
    filterArray:string[];
    setFilterArray:Dispatch<any>;
}

const Body = (props:BodyProps) => {
    const {setIsAddPage, data, setData, filterArray, setFilterArray} = props;
    return (
        <div className="body--container">
            <TodoList todos={data.user.todos} setData={setData} setIsAddPage={setIsAddPage} filterArray={filterArray}/>
            <SideBar setIsAddPage={setIsAddPage} userDetails={data.user} setFilterArray={setFilterArray} filterArray={filterArray}/>
        </div>
    )
}

export default Body;