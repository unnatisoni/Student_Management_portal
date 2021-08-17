import { CancelTokenSource } from "axios";
import { createSelector } from "reselect";
import { CancellationToken } from "typescript";
import {AppState } from "../store";
import { groupStateSelector } from "./app.selectors";

const cancelationTokens: {[query: string]: CancelTokenSource} = {}

export const groupQuerySelector = createSelector([groupStateSelector], (groupState) => groupState.query);

export const groupQueryMapSelector = createSelector([groupStateSelector], (groupState) => groupState.queryMap); 

const groupByIdSelector = createSelector([groupStateSelector], (groupState) => groupState.byId);

 const groupsLoadingQuerySelector = createSelector(
    [groupStateSelector],
    (groupState) => groupState.loadingQuery
);

export const groupsLoadingSelector = createSelector(
    [groupQuerySelector, groupsLoadingQuerySelector],
    (query, loadingMap) => loadingMap[query]
);





export const groupsSelector = (state: AppState) => {
    const query = groupQuerySelector(state);
    const queryMap = groupQueryMapSelector(state);
    const byId = groupByIdSelector(state);
    const groupIds = queryMap[query] || [];
    const groups = groupIds.map((id) => byId[id]);
    return groups;
}
