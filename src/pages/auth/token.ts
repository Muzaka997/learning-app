import authApi from "./authApi";

export const setAuthToken = (token?: string) => {
  if (token) {
    authApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete authApi.defaults.headers.common["Authorization"];
  }
};
