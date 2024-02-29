"use client";

import { ReactNode, createContext, useContext } from "react";
import { UserContextType, UserData } from "@/app/types/userTypes";

const UserContext = createContext<UserContextType>({
  user: { name: "", id: 0, uid: "" },
  setUser: () => {},
});
const UseProvider = UserContext.Provider;

export const AuthUserProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: UserContextType;
}) => {
  const user = useContext(UserContext);
  return <UseProvider value={value}>{children}</UseProvider>;
};

export const useAuthUser = () => {
  const user = useContext(UserContext);
  return user;
};
