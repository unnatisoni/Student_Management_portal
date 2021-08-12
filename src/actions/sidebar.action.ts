import { bindActionCreators } from "redux";
import { store } from "../store";
import { SIDEBAR_OPEN } from "./actions.const";


const sidebar = (isOpen : boolean) => ({
    type: SIDEBAR_OPEN, payload: isOpen
});

export const sidebarAction = bindActionCreators({
    open: sidebar,
}, store.dispatch);