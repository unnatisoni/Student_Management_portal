import { Group } from "../models/Group"
import axios, { CancelToken, CancelTokenSource } from "axios";
import { BASE_URL, get } from "./Base";


export interface GroupRequest {
    limit?: number;
    offset?: number;
    query?: any;
    status?:
      | "all-groups"
      | "favourite"
      | "archieved";
  }
  
  interface GroupResponse {
    data : Group[];
  }
  
  
  export const fetchGroups = (
    data: GroupRequest,
    token?:CancelToken
  ) => {
    const url = BASE_URL + "/groups";
    return get(url, { params: data, cancelToken: token})
      
  };
  