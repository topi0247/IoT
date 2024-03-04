"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "typescript-cookie";
import { ACCESS_TOKEN_KEY, CLIENT_KEY, UID_KEY } from "@/src/utils/setting";
import { NovelData, NovelsData } from "@/src/utils/types/novelTypes";

// SSRでやりたい
async function getData(): Promise<{ message: string }> {
  const fetchData = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/novels`,
    {
      headers: {
        "access-token": getCookie(ACCESS_TOKEN_KEY),
        Client: getCookie(CLIENT_KEY),
        uid: getCookie(UID_KEY),
        //"Cache-Control": "no-store",
      },
    }
  );
  const novels = fetchData.data;
  return novels;
}

const Novels = () => {
  //const [novels, setNovels] = useState<NovelData[]>([]);
  const [novels, setNovels] = useState<string>();

  useEffect(() => {
    const fetchNovels = async () => {
      const data = await getData();
      setNovels(data.message);
    };

    fetchNovels();
  }, []);

  return (
    <article className="bg-white p-7 rounded-xl">
      <h2 className="text-semibold text-xl border-b border-slate-500">
        リスト
      </h2>
      <section className="my-5 flex flex-col gap-2">
        {/* {novels.map((novel: NovelData) => (
          <div key={novel.id} className="flex flex-col gap-1">
            <h3 className="text-semibold text-lg">{novel.title}</h3>
          </div>
        ))} */}
        <p>{novels}</p>
      </section>
    </article>
  );
};

export default Novels;
