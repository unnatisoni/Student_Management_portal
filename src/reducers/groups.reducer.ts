import { Reducer } from "redux";
import {
  GROUPS_QUERY_CHANGED,
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
  loading : boolean;
}

const initialState = {
  byId: {},
  query: "",
  queryMap: {},
  loading: false,
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUPS_QUERY_CHANGED:
      return { ...state, query: action.payload, loading: true 
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
        loading: false,
      };
    default:
      return state;
  }
};
