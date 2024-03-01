"use client";

import { metadata } from "@/src/utils/metadata";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { Provider } from "react-redux";
import { store } from "@/src/redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <MainLayout>{children}</MainLayout>
    </Provider>
  );
}

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="ja">
      <body
        className={`${inter.className} flex flex-col min-h-screen w-screen bg-slate-800`}
      >
        <Header />
        <main className="flex-1 w-4/5 max-w-[1200px]  my-8  rounded-xl p-7 py-10 container m-auto">
          {children}
        </main>
        <footer className="text-center my-3 text-white">
          <p>とぴ</p>
        </footer>
      </body>
    </html>
  );
};
