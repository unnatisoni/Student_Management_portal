import axios from "axios";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem(
    LS_LOGIN_TOKEN
  );
  if (!token) {
    return config;
  }
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: token,
    },
  };
});

axios.interceptors.response.use(
  undefined,
  (error) => {
    if (error.response.data.code === 9101) {
      localStorage.removeItem(LS_LOGIN_TOKEN);
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    is_2fa_enabled: boolean;
  };
  token: string;
  user: User;
}

interface User {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  role: "staff" | "admin";
}

const BASE_URL =
  "https://api-dev.domecompass.com";
export const LS_LOGIN_TOKEN = "login token ";

export const login = (data: LoginData) => {
  const url = BASE_URL + "/login";
  console.log(data);
  return axios
    .post<LoginResponse>(url, data)
    .then((response) => {
      console.log(response);
      localStorage.setItem(
        "login token ",
        response.data.token
      );
      return response.data.user;
    });
};

export const logout = () => {
  localStorage.removeItem(LS_LOGIN_TOKEN);
};

interface GroupRequest {
  limit?: number;
  offset?: number;
  query?: any;
  status?:
    | "all-groups"
    | "favourite"
    | "archieved";
}

export const fetchGroups = (
  data: GroupRequest
) => {
  const url = BASE_URL + "/groups";
  return axios
    .get(url, { params: data })
    .then((response) => {
      console.log(response.data.data);
      return response.data.data;
    })
    .catch((e) => console.log(e));
};
