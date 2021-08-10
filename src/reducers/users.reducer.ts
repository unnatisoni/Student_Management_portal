import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/actions.const";
import { Entity } from "../models/Entity";
import { User } from "../models/Users";
import { addOne, EntityState } from "./entity.reducer";

export interface UserState extends EntityState<User>  {
  
}

const initialState = {
    byId: {}
}
export const userReducer: Reducer<UserState> = (state = initialState, action) => {
    switch (action.type) {
        case ME_FETCH:
        case ME_LOGIN:
            return addOne(state, action.payload) as UserState;
        default:
            return state;
        } 
};