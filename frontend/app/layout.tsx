import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { RoutePath } from "./path/path";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.className} flex flex-col min-h-screen w-screen bg-slate-800`}
      >
        <header className="px-4 py-4 bg-white drop-shadow-md">
          <div className="flex justify-between items-center container m-auto">
            <h1 className="text-2xl tracking-wider">IoT</h1>
            <nav>
              <ul className="grid items-center grid-cols-4 text-center">
                <li className="border-r border-slate-300">
                  <Link href={RoutePath.SignUp} className="px-4">
                    新規登録
                  </Link>
                </li>
                <li className="border-r border-slate-300">
                  <Link href={RoutePath.Login} className="px-4">
                    ログイン
                  </Link>
                </li>
                <li className="border-r border-slate-300">
                  <Link href={RoutePath.Novels("1")} className="px-4">
                    一覧
                  </Link>
                </li>
                <li>
                  <button className="px-4">ログアウト</button>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-1 w-4/5 max-w-[1200px]  my-8  rounded-xl p-7 py-10 container m-auto">
          {children}
        </main>
        <footer className="text-center my-3 text-white">
          <p>とぴ</p>
        </footer>
      </body>
    </html>
  );
}
