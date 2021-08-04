import { useSelector } from "react-redux";
import { AnyAction, createStore, Reducer } from "redux";
import { Group } from "./models/Group";
import { User } from "./models/Users";

const ME_FETCH = "me/fetch";

export interface AppState {
    me? : User;
    isSidebarOpen: boolean;
    groupQuery: string;
    groupQueryMap : { [query : string] : number[] };
    groups: { [id: number] : Group};
}

const initialState : AppState = {
    me : undefined,
    isSidebarOpen : true,
    groupQuery: "",
    groupQueryMap: {},
    groups: {},

}

const reducer = (currentState = initialState, dispatchedAction : AnyAction) => {
    switch(dispatchedAction.type){
        case ME_FETCH:
        case 'me/login':
            return {...currentState, me: dispatchedAction.payload}
        default:
            return currentState;
    }
}

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export const meFetchAction = (u : User) => ({type : ME_FETCH, payload : u})

//export const useAppSelector : TypedUseSelectorHook<AppState> = useSelector;