import { Reducer } from "redux";
import {
  GROUPS_QUERY,
  GROUPS_QUERY_COMPLETED,
} from "../actions/actions.const";
import { Group } from "../models/Group";
import {
  addMany,
  EntityState,
  getIds,
} from "./entity.reducer";

export interface GroupState
  extends EntityState<Group> {
  query: string;
  queryMap: { [query: string]: number[] };
  selectedId?: number;
  loadingQuery : {[query: string]: boolean};
}

const initialState = {
  byId: {},
  query: "",
  queryMap: {},
  loadingQuery : {},
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUPS_QUERY:
      return { ...state, query: action.payload, loadingQuery: {...state.loadingQuery, [action.payload]: true } 
    };
    
    case GROUPS_QUERY_COMPLETED:
      const groups = action.payload
        .groups as Group[];
      const groupIds = getIds(groups);
      const newState = addMany(
        state,
        groups
      ) as GroupState;
      return {
        ...newState,
        queryMap: {
          ...newState.queryMap,
          [action.payload.query]: groupIds,
        },
        loadingQuery: {
          ...newState.loadingQuery,
          [action.payload.query]: false,
        }
      };
    default:
      return state;
  }
};