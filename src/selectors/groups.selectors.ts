import { createSelector } from "reselect";
import {AppState } from "../store";
import { groupStateSelector } from "./app.selectors";


export const groupQuerySelector = createSelector([groupStateSelector], (groupState) => groupState.query);

const groupQueryMapSelector = createSelector([groupStateSelector], (groupState) => groupState.queryMap);

const groupByIdSelector = createSelector([groupStateSelector], (groupState) => groupState.byId);


export const groupsSelector = (state: AppState) => {
    const query = groupQuerySelector(state);
    const queryMap = groupQueryMapSelector(state);
    const byId = groupByIdSelector(state);
    const groupIds = queryMap[query] || [];
    const groups = groupIds.map((id) => byId[id]);
    return groups;
}