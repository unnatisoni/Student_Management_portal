import { bindActionCreators } from "redux";
import { Group } from "../models/Group";
import { store } from "../store";
import { GROUPS_QUERY_CHANGED , GROUPS_QUERY_COMPLETED } from "./actions.const";

export const queryAction = (query : string) => ({
    type:  GROUPS_QUERY_CHANGED,
    payload:  query,
});

export const queryCompletedyAction = (query : string, groups: Group[] ) => ({
    type: GROUPS_QUERY_COMPLETED,
    payload: {query, groups},
});


