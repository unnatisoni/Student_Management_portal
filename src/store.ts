import { TypedUseSelectorHook, useSelector } from "react-redux";
import {  combineReducers, createStore,  } from "redux";
import { authReducer } from "./reducers/auth.reducer";
import { groupReducer } from "./reducers/groups.reducer";
import { sidebarReducer } from "./reducers/sidebar.reducer";
import { userReducer } from "./reducers/users.reducer";



const reducer = combineReducers ({
    users: userReducer,
    groups: groupReducer,
    auth: authReducer,
    sidebar : sidebarReducer,
});

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export type AppState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
