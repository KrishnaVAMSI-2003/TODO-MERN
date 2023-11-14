import axios from "axios";
import { alltodos, addtodo, deleteTodo, updateTodo } from "../utils/apiConstants";

const getDataApi = async() => {
    return await axios.get(alltodos, { headers: { "x-auth-token": localStorage.getItem("token") }});
}
const addTodoApi = async(data:any) => {
    return await axios.post(addtodo, data, { headers: { "x-auth-token": localStorage.getItem("token") }});
}
const updateTodoApi = async(data:any) => {
    return await axios.put(updateTodo, data, { headers: { "x-auth-token": localStorage.getItem("token") }});

}
const deleteTodoApi = async(_id: string) => {
    return await axios.delete(`${deleteTodo}${_id}`, { headers: { "x-auth-token": localStorage.getItem("token") }});
}
export {getDataApi, addTodoApi, updateTodoApi, deleteTodoApi};