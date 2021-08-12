import { Reducer } from "redux";
import { SIDEBAR_OPEN } from "../actions/actions.const";

interface sidebarState  {
    isOpen : boolean;
}

const initialState = {
    isOpen : true,
}


export const sidebarReducer: Reducer<sidebarState> = (state = initialState, action) => {
    switch (action.type){
        case SIDEBAR_OPEN:
            return {...state, isOpen: action.payload };
        default:
            return state;
    }
}