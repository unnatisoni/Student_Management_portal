import axios, { Canceler, CancelTokenSource } from "axios";
import { groupActions } from "../actions/groups.actions";
import { GroupRequest, fetchGroups as fetchGroupsAPI } from "../api/groups";
import { groupQueryMapSelector } from "../selectors/groups.selectors";
import { store } from "../store";


export const fetchGroups = (request : GroupRequest) => {

const queryMap = groupQueryMapSelector(store.getState());
const groupIds = queryMap[request.query];
const query = request.query;
 groupActions.query(query, !groupIds);

if(groupIds){
    return;
} 



 fetchGroupsAPI(request).then((groups) => {
    groupActions.queryCompleted(query, groups);
 });
};
