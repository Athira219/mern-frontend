import { baseURL } from "./BaseUrl";
import { baseApi } from "./baseApi";

//----------register---------//
export const registerApi = (reqBody) => {
    return baseApi('POST', `${baseURL}/user/register`, reqBody, "")
  }
  //----------login---------//
  export const loginApi = (reqBody) => {
    return baseApi('POST', `${baseURL}/user/login`, reqBody, "")
  }