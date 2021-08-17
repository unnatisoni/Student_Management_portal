import axios, { Canceler, CancelTokenSource } from "axios";
import { groupActions } from "../actions/groups.actions";
import { GroupRequest, fetchGroups as fetchGroupsAPI } from "../api/groups";
import { store } from "../store";


export const fetchGroups = (request : GroupRequest) => {
 const query = request.query;
 groupActions.query(query);
 fetchGroupsAPI(request).then((groups) => {
    groupActions.queryCompleted(query, groups);
 });
};
