"use client";

import Link from "next/link";
import { RoutePath } from "./path/path";

function Home() {
  return (
    <article className="m-auto w-screen h-screen bg-slate-800 flex justify-center items-center">
      <section className="m-auto bg-slate-50 p-12 w-[400px] rounded">
        <h2 className="text-center text-2xl">
          <span className="px-5 pb-2 border-b-2 border-slate-800">
            ログイン
          </span>
        </h2>
        <div className="mt-10">
          <form className="flex flex-col gap-3">
            <dl className="m-auto w-full flex flex-wrap box-border">
              <dt className="w-5/12 mb-4">
                <label htmlFor="email">メールアドレス</label>
              </dt>
              <dd className="w-7/12 mb-4">
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-300 border border-opacity-0 focus:outline-none hover:border-slate-800 hover:border transition-all rounded px-2"
                />
              </dd>
              <dt className="w-5/12">
                <label htmlFor="password" className="w-full">
                  パスワード
                </label>
              </dt>
              <dd className="w-7/12">
                <input
                  type="password"
                  id="password"
                  className="w-full bg-slate-300 border border-opacity-0 focus:outline-none hover:border-slate-800 hover:border transition-all rounded px-2"
                />
              </dd>
            </dl>
            <div className="flex flex-col gap-3 justify-center items-center mt-4">
              <button
                type="submit"
                className="bg-slate-500 text-white p-2 px-4 rounded hover:bg-slate-300 transition-all"
              >
                ログイン
              </button>
              <div className="text-sm">
                新規登録は
                <Link
                  href={RoutePath.SignUp}
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

export default Home;
