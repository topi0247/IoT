"use client";

import { ReactNode, createContext, useContext } from "react";
import { UserContextType, UserData } from "@/src/utils/types/userTypes";

const UserContext = createContext<UserContextType>({
  user: {} as UserData,
  setUser: (params) => {},
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
