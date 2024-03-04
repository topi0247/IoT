import { LoginParams, SignUpParams } from "@/src/utils/types/authTypes";
import { Client } from "./client";
import { getCookie, getCookies } from "typescript-cookie";
import { ACCESS_TOKEN_KEY, CLIENT_KEY, UID_KEY } from "@/src/utils/setting";

// ユーザー登録
export const sighUp = (params: SignUpParams) => {
  return Client.post("/auth", params);
};

// ログイン
export const login = (params: LoginParams) => {
  return Client.post("/auth/sign_in", params);
};

// ログアウト
export const logout = () => {
  return Client.delete("/auth/sign_out", {
    headers: {
      "access-token": getCookie(ACCESS_TOKEN_KEY),
      Client: getCookie(CLIENT_KEY),
      uid: getCookie(UID_KEY),
    },
  });
};

// ログインユーザーの情報取得
// export const currentUser = () => {
//   if (
//     !getCookie(ACCESS_TOKEN_KEY) ||
//     !getCookie(CLIENT_KEY) ||
//     !getCookie(UID_KEY)
//   )
//     return;

//   return Client.get("/auth/sessions", {
//     headers: {
//       "access-token": getCookie(ACCESS_TOKEN_KEY),
//       Client: getCookie(CLIENT_KEY),
//       uid: getCookie(UID_KEY),
//     },
//   });
// };
