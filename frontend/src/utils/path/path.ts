export const RoutePath = {
  Home: "/",
  SignUp: "/signup",
  Login: "/login",
  Novels: "/novel",
  Novel: (id = 0) => `/novel/${id}`,
  User: "/user",
};
