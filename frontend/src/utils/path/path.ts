export const RoutePath = {
  Home: "/",
  SignUp: "/signup",
  Login: "/login",
  Novels: "/novels",
  Novel: (id = ":id") => `/novel/${id}`,
  User: "/user",
};
