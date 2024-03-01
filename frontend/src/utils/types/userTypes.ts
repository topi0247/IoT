import { Dispatch, SetStateAction } from "react";

export type UserData = {
  id: number;
  name: string;
  uid: string;
};

export type UserContextType = {
  user: UserData;
  setUser: Dispatch<SetStateAction<UserData>>;
};
