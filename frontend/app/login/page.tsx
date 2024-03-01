"use client";

import Link from "next/link";
import { RoutePath } from "@/app/utils/path/path";
import { useState } from "react";
import { getLoginParams } from "@/app/utils/types/authTypes";
import { login } from "@/app/api/auth/auth";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginParams = getLoginParams({ email, password });
    try {
      const response = await login(loginParams);

      if (response.status === 200) {
        router.push(RoutePath.Novels("1"));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <article className="m-auto">
      <section className="m-auto bg-slate-50 p-12 w-[400px] rounded-2xl">
        <h2 className="text-center text-2xl">
          <span className="px-5 pb-2 border-b-2 border-slate-800">
            ログイン
          </span>
        </h2>
        <div className="mt-10">
          <form className="flex flex-col gap-3" onSubmit={handleLoginSubmit}>
            <dl className="m-auto w-full flex flex-wrap box-border">
              <dt className="w-5/12 mb-2">
                <label htmlFor="email">メールアドレス</label>
              </dt>
              <dd className="w-7/12 mb-2">
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-300 border border-opacity-0 focus:outline-none hover:border-slate-800 hover:border transition-all rounded px-2"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </dd>
              <dt className="w-5/12 mb-2">
                <label htmlFor="password" className="w-full">
                  パスワード
                </label>
              </dt>
              <dd className="w-7/12 mb-2">
                <input
                  type="password"
                  id="password"
                  className="w-full bg-slate-300 border border-opacity-0 focus:outline-none hover:border-slate-800 hover:border transition-all rounded px-2"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </dd>
            </dl>
            <div className="flex flex-col gap-3 justify-center items-center mt-4">
              <button
                type="submit"
                className="bg-slate-500 text-white p-2 px-4 rounded hover:bg-slate-300 transition-all tracking-widest"
              >
                ログイン
              </button>
              <div className="text-sm">
                新規登録
                <Link
                  href={RoutePath.Home}
                  className="text-orange-600 border-b border-orange-600 hover:text-opacity-50 transition-all"
                >
                  こちら
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </article>
  );
}

export default Login;
