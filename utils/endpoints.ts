const serverUrl = "http://localhost:5000/api";
const auth = "/auth";
const authEndpoint = serverUrl + auth;

export const endpoints = {
  admin_login: authEndpoint + "/admin-login",
};
