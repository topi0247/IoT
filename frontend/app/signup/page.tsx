"use client";

import Link from "next/link";
import { RoutePath } from "@/src/utils/path/path";
import { useState } from "react";
import { getSignUpParams } from "@/src/utils/types/authTypes";
import { sighUp } from "@/src/api/auth/auth";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const router = useRouter();

  const handleSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const signUpParams = getSignUpParams({
      name: userName,
      email,
      password,
      passwordConfirmation,
    });

    try {
      const response = await sighUp(signUpParams);

      if (response.status === 200) {
        router.push(RoutePath.Novels("1"));
      }
    } catch (error) {
      // TODO : バックのバリデーションに引っかかったときの対処
      console.error(error);
      /*
        ユーザー認証に失敗したときのエラーメッセージ
        {"success":false,"errors":["ログイン用の認証情報が正しくありません。再度お試しください。"]}
      */
    }
  };

  return (
    <article className="m-auto">
      <section className="m-auto bg-slate-50 p-12 w-[400px] rounded-2xl">
        <h2 className="text-center text-2xl">
          <span className="px-5 pb-2 border-b-2 border-slate-800">
            新規登録
          </span>
        </h2>
        <div className="mt-10">
          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => handleSignUpSubmit(e)}
          >
            <dl className="m-auto w-full flex flex-wrap box-border">
              <dt className="w-5/12 mb-2">
                <label htmlFor="name" className="w-full">
                  お名前
                </label>
              </dt>
              <dd className="w-7/12 mb-2">
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-300 border border-opacity-0 focus:outline-none hover:border-slate-800 hover:border transition-all rounded px-2"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </dd>
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
              <dt className="w-5/12">
                <label htmlFor="passwordConformation" className="w-full">
                  パスワード確認
                </label>
              </dt>
              <dd className="w-7/12">
                <input
                  type="password"
                  id="passwordConformation"
                  className="w-full bg-slate-300 border border-opacity-0 focus:outline-none hover:border-slate-800 hover:border transition-all rounded px-2"
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </dd>
            </dl>
            <div className="flex flex-col gap-3 justify-center items-center mt-4">
              <button
                type="submit"
                className="bg-slate-500 text-white p-2 px-4 rounded hover:bg-slate-300 transition-all tracking-widest"
              >
                新規登録
              </button>
              <div className="text-sm">
                ログインは
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
};

export default SignUp;
