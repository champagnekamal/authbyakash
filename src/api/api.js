import axios from 'axios';  
import { API_URL } from './_common';

const login = async({email,password})=>{
    // debugger
    try {
        console.log(API_URL,"enjbj");
        const response = await axios.post(`${API_URL}/user/signin`, {
            email: email,
            password: password,
          });
          console.log(response,"ernjv");
        console.log('success');
        return response
    } catch (error) {
        console.log(error);
        return error.response
    }
}
const signup = async({name,email,password})=>{
    // debugger
    try {
        // debugger
        console.log(API_URL,"enjbj");
        const response = await axios.post(`${API_URL}/user/signup`, {
            name:name,
            email: email,
            password: password,
          });
          console.log(response,"ernjv");
       
        return response
    } catch (error) {
        console.log(error);
        return error.response
    }
}

export {login,signup}