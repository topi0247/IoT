"use client";

import { currentUser } from "@/src/api/auth/auth";
import { setLoginUser } from "@/src/redux/hooks/auth/user";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks/hooks";
import { RootState } from "@/src/redux/store";
import { RoutePath } from "@/src/utils/path/path";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export const Header = () => {
  const state = useAppSelector((state: RootState) => state);
  let user = state?.user;
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) return;

    currentUser()
      ?.then((response) => {
        if (response && response.status === 200) {
          const responseData = response.data.data;
          dispatch(
            setLoginUser({
              id: responseData.id,
              name: responseData.name,
              uuid: responseData.uuid,
            })
          );
        } else {
          router.push(RoutePath.Login);
          return;
        }
      })
      .catch((error) => {
        console.error("Login check failed:", error);
        router.push(RoutePath.Login);
      });
  }, []);

  return (
    <header className="px-4 py-4 bg-white shadow shadow-white">
      <div className="flex justify-between items-center container m-auto">
        <h1 className="text-2xl tracking-wider">
          <Link href={user ? RoutePath.Novels : RoutePath.Home}>IoT</Link>
        </h1>
        <nav>
          <ul className="grid items-center grid-cols-2 text-center">
            {user ? (
              <>
                <li className="border-r border-slate-300">
                  <Link href={RoutePath.Novels} className="px-4">
                    一覧
                  </Link>
                </li>
                {/* <li>
                  <button className="px-4">ログアウト</button>
                </li> */}
                <Link href={RoutePath.User}>{user.name}</Link>
              </>
            ) : (
              <>
                <li className="border-r border-slate-300">
                  <Link href={RoutePath.SignUp} className="px-4">
                    新規登録
                  </Link>
                </li>
                <li>
                  <Link href={RoutePath.Login} className="px-4">
                    ログイン
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
