import { bindActionCreators } from "redux";
import { User } from "../models/Users";
import { store } from "../store";
import { ME_FETCH } from "./actions.const";

const meFetchAction = (u : User) => ({type : ME_FETCH, payload : u});
const meLoginAction = (u : User) => ({type : ME_FETCH, payload : u});

export const authActions = bindActionCreators({
    fetch : meFetchAction,
    login : meLoginAction,
}, store.dispatch);
