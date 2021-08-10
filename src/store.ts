import { TypedUseSelectorHook, useSelector } from "react-redux";
import {  combineReducers, createStore,  } from "redux";
import { authReducer } from "./reducers/auth.reducer";
import { groupReducer } from "./reducers/groups.reducer";
import { userReducer } from "./reducers/users.reducer";



const reducer = combineReducers ({
    users: userReducer,
    groups: groupReducer,
    auth: authReducer
});

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export type AppState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

/*
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



    const reducer = (state = initialState, action : AnyAction) => {
    const newState = {
    auth: authReducer(state.auth, action),
    users: userReducer( state.users , action),
    groups : groupReducer(state.groups, action),
    };
    if( newState.auth === state.auth && newState.users === state.users && newState.groups === state.groups) {
        return state;
    }
    return newState;
};


export interface AppState {
    auth: AuthState;
    users : UserState;
    groups : GroupState;
}

    */