import axios from 'axios';
import { LOGIN_URL, SIGNUP_URL } from '../utils/apiConstants';
type LoginData = {
    username?: string;
    email: string;
    password: string;
}

const loginApi = async (data: LoginData) => {
    return await axios.post(LOGIN_URL, data);
}
const signupApi = async (data: LoginData) => {
    return await axios.post(SIGNUP_URL, data);
}

export { loginApi, signupApi };