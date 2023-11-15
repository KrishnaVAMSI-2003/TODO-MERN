import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import "./css/mainpage.css";
import Body from "./components/Body";
import AddTodo from "./components/AddTodo";
import { getDataApi } from "../../services/getDataApi";
import { Data } from "../../utils/types";

const MainPage = () => {

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(!token) {
            window.location.href = "/";
        }
    },[])
    const [isAddPage, setIsAddPage] = useState<string>("");
    const [data, setData] = useState<Data>({
        user:{
            username:"",
            email:"",
            todos: []
        }
    });
    const [err, setErr] = useState<string>("");
    const [filterArray, setFilterArray] = useState<string[]>([]);
    

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
            <Body setIsAddPage={setIsAddPage} data={data} setData={setData} filterArray={filterArray} setFilterArray={setFilterArray}/>
            <AddTodo isAddPage={isAddPage} setIsAddPage={setIsAddPage} data={data}/>
            {err && <div className="mainpage--error">{err}</div>}
        </div>
    )
}

export default MainPage;