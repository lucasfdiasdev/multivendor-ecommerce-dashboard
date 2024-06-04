const serverUrl = "http://localhost:5000/api";
const auth = "/auth";
const user = "/user";
const category = "/category";
const product = "/product";
const authEndpoint = serverUrl + auth;
const userEndpoint = serverUrl + user;
const categoryEndpoint = serverUrl + category;
const productEndpoint = serverUrl + product;

export const endpoints = {
  admin_login: authEndpoint + "/admin-login",
  seller_login: authEndpoint + "/seller-login",
  seller_register: authEndpoint + "/seller-register",

  // user
  get_user: userEndpoint + "/get-user",
  get_roles: userEndpoint + "/get-roles",

  // categories
  add_departament: categoryEndpoint + "/add-departament",
  get_all_departaments: categoryEndpoint + "/get-all-departaments",

  // products
  add_product: productEndpoint + "/add-product",
  get_product: productEndpoint + "/get-product",
  get_all_products: productEndpoint + "/get-all-products",
};
