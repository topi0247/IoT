"use client";

import { getCookie } from "typescript-cookie";
import { Client } from "../auth/client";
import { ACCESS_TOKEN_KEY, CLIENT_KEY, UID_KEY } from "@/src/utils/setting";

export const getNovels = () => {
  const fetchData = Client.get("/api/v1/novels", {
    headers: {
      "access-token": getCookie(ACCESS_TOKEN_KEY),
      Client: getCookie(CLIENT_KEY),
      uid: getCookie(UID_KEY),
    },
  }).then((response) => {
    return response.data;
  });

  return fetchData;
};
