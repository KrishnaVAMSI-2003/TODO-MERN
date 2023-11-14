import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import "./css/mainpage.css";
import Body from "./components/Body";
import AddTodo from "./components/AddTodo";
import { getDataApi } from "../../services/getDataApi";
import { Data } from "../../utils/types";

const MainPage = () => {
    const [isAddPage, setIsAddPage] = useState<boolean>(false);
    const [data, setData] = useState<Data>({
        user:{
            username:"",
            email:"",
            todos: []
        }
    });
    const [err, setErr] = useState<string>("");
    const token = localStorage.getItem("token");
    if(!token) {
        window.location.href = "/";
    }

    useEffect(() => {
        const getData = async () => {
            try{
                const res = await getDataApi();
                setData(res.data);
            } catch(err:any) {
                setErr(err.response.data[0].message);
            }
        }
        getData();
    },[isAddPage])

    return (
        <div className="mainpage--container">
            <NavBar/>
            <Body setIsAddPage={setIsAddPage} data={data}/>
            <AddTodo isAddPage={isAddPage} setIsAddPage={setIsAddPage}/>
            {err && <div className="mainpage--error">{err}</div>}
        </div>
    )
}

export default MainPage;