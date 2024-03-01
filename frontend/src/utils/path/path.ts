export const RoutePath = {
  Home: "/",
  SignUp: "/signup",
  Login: "/login",
  Novels: (id = ":id") => `/novels/${id}`,
};
