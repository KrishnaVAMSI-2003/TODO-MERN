import axios from "axios";
import { alltodos } from "../utils/apiConstants";

const getDataApi = async() => {
    return await axios.get(alltodos, { headers: { "x-auth-token": localStorage.getItem("token") }});
}

export {getDataApi};