import { CancelTokenSource } from "axios";
import { createSelector } from "reselect";
import { groupStateSelector } from "./app.selectors";

const cancelationTokens: {[query: string]: CancelTokenSource} = {}

export const groupQuerySelector = createSelector([groupStateSelector], (groupState) => groupState.query);

export const groupQueryMapSelector = createSelector([groupStateSelector], (groupState) => groupState.queryMap); 

const groupByIdSelector = createSelector([groupStateSelector], (groupState) => groupState.byId);

export const groupsLoadingSelector = createSelector(
    [groupStateSelector],
    (groupState) => groupState.loading
);


export const groupsSelector = createSelector(
    [groupQuerySelector, groupQueryMapSelector, groupByIdSelector],
    (query, queryMap, byId) => {
      const groupIds = queryMap[query] || [];
      const groups = groupIds.map((id) => byId[id]);
      return groups;
    }
);


