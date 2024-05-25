const serverUrl = "http://localhost:5000/api";
const auth = "/auth";
const user = "/user";
const category = "/category";
const authEndpoint = serverUrl + auth;
const userEndpoint = serverUrl + user;
const categoryEndpoint = serverUrl + category;

export const endpoints = {
  admin_login: authEndpoint + "/admin-login",
  seller_login: authEndpoint + "/seller-login",
  seller_register: authEndpoint + "/seller-register",

  // user
  get_user: userEndpoint + "/get-user",
  get_roles: userEndpoint + "/get-roles",

  // category
  add_category: categoryEndpoint + "/add-category",
  get_category: categoryEndpoint + "/get-categories",
};
