import { bindActionCreators } from "redux";
import { Group } from "../models/Group";
import { store } from "../store";
import { GROUPS_QUERY, GROUPS_QUERY_COMPLETED } from "./actions.const";

const queryAction = (query : string, loading: boolean) => ({
    type: GROUPS_QUERY,
    payload:{ query, loading},
});

const queryCompletedyAction = (query : string, groups: Group[] ) => ({
    type: GROUPS_QUERY_COMPLETED,
    payload: {query, groups},
});

export const groupActions = bindActionCreators({
    query: queryAction,
    queryCompleted: queryCompletedyAction
}, store.dispatch)


