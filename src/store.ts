import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore,  } from "redux";
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

const reducer = (state = initialState, action : AnyAction) => {
    switch(action.type){
        case ME_FETCH:
        case 'me/login':
            return {...state, me: action.payload};
        case "groups/query":
            return {...state, groupQuery: action.payload };
        case "groups/query_completed":
            const groups = action.payload.groups as Group[];
            const groupIds = groups.map((g) => g.id);
            const groupMap = groups.reduce((prev, group) => {
                return { ...prev, [group.id]: group};
            }, {});
            return {...state, groupQueryMap : {...state.groupQueryMap, [action.payload.query] : groupIds}, groups: {...state.groups, ...groupMap}, };
        default:
            return state;
    }
}

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export const meFetchAction = (u : User) => ({type : ME_FETCH, payload : u})

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

