"use client";

import React, { useEffect, useState } from "react";
import { getNovels } from "@/src/api/novels/fetchData";
import { NovelData, NovelsData } from "@/src/utils/types/novelTypes";
import { NoveListItem } from "./components/novelListItem";

const Novels = () => {
  const [novels, setNovels] = useState<NovelsData>([]);

  useEffect(() => {
    const fetchNovels = async () => {
      await getNovels()
        .then((response) => {
          setNovels(response);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchNovels();
  }, []);

  return (
    <article className="bg-white p-7 rounded-xl">
      <h2 className="text-semibold text-xl border-b border-slate-500">
        リスト
      </h2>
      <section className="my-5 flex flex-col gap-2">
        {novels.length > 0 ? (
          novels.map((novel: NovelData) => (
            <NoveListItem key={novel.id} novel={novel} />
          ))
        ) : (
          <p>ノートがありません</p>
        )}
      </section>
    </article>
  );
};

export default Novels;
