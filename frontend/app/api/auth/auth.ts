import { Client } from "./client";
import Cookies from "js-cookie";

type SignUpParams = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

// ユーザー登録
export const sighUp = (params: SignUpParams) => {
  return Client.post("/auth", params);
};

type LoginParams = {
  email: string;
  password: string;
};

// ログイン
export const login = (params: LoginParams) => {
  return Client.post("/auth/sign_in", params);
};

// ログアウト
export const logout = () => {
  return Client.delete("/auth/sign_out", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      Client: Cookies.get("_Client"),
      uid: Cookies.get("_uid"),
    },
  });
};

// ログインユーザーの情報取得
export const currentUser = () => {
  if (
    !Cookies.get("_access_token") ||
    !Cookies.get("_Client") ||
    !Cookies.get("_uid")
  )
    return;

  return Client.get("/auth/sessions", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      Client: Cookies.get("_Client"),
      uid: Cookies.get("_uid"),
    },
  });
};
