import axios from "axios";
import { alltodos, deleteTodo } from "../utils/apiConstants";

const getDataApi = async() => {
    return await axios.get(alltodos, { headers: { "x-auth-token": localStorage.getItem("token") }});
}
const deleteTodoApi = async(_id: string) => {
    return await axios.delete(`${deleteTodo}/${_id}`, { headers: { "x-auth-token": localStorage.getItem("token") }});
}
export {getDataApi, deleteTodoApi};