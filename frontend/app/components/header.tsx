import { useAppSelector } from "@/src/redux/hooks/hooks";
import { RootState } from "@/src/redux/store";
import { RoutePath } from "@/src/utils/path/path";
import Link from "next/link";
import React from "react";

export const Header = () => {
  const state = useAppSelector((state: RootState) => state);
  let user = state.user;

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
