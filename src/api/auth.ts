import axios from "axios";
import { User } from "../models/Users";
import { BASE_URL, LS_AUTH_TOKEN } from "./Base";

interface LoginData {
    email: string;
    password: string;
  }
  
  interface LoginResponse {
    data: {
      is_2fa_enabled: boolean;
    };
    token: string;
    user: User;
  }
  
  

  
  export const login = (data: LoginData) => {
    const url = BASE_URL + "/login";
    console.log(data);
    return axios
      .post<LoginResponse>(url, data)
      .then((response) => {
        console.log(response);
        localStorage.setItem(
          "Auth token ",
          response.data.token
        
        );
        return response.data.user;
      });
  };
  
  export const logout = () => {
    localStorage.removeItem(LS_AUTH_TOKEN);
  };

  interface MeResponse {
    data : User;
  }
  export const me = () => {
    const url = BASE_URL + "/me";
    return axios.get(url).then((response) => {
      return response.data.data;
    });
  }