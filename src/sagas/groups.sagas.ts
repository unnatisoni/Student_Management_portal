import { actionChannel, debounce, call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { GROUPS_QUERY_CHANGED } from "../actions/actions.const";
import { queryCompletedyAction } from "../actions/groups.actions";
import { fetchGroups as fetchGroupsApi } from "../api/groups";
export function* fetchGroups(action : AnyAction) : Generator<any>  {
    const groupRes : any = yield call(fetchGroupsApi,{query: action.payload, status: "all-groups"})
   
    yield put(queryCompletedyAction(action.payload, groupRes.data.data));

   };

   

   export function* watchGroupQueryChanged() {
    yield debounce(1000, GROUPS_QUERY_CHANGED, fetchGroups);
}
   