"use client";

import React, { useEffect, useState } from "react";
import { getNovels } from "@/src/api/novels/fetchData";
import { NovelData, NovelsData } from "@/src/utils/types/novelTypes";
import { NoveListItem } from "./components/novelListItem";

const novelsData: NovelsData = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `test${i + 1}`,
  createdAt: `2021/09/${String(i + 1).padStart(2, "0")} 10:10`,
  updatedAt: `2021/09/${String(i + 1).padStart(2, "0")} 10:10`,
  totalCharacters: (i + 1) * 100,
}));

const Novels = () => {
  //const [novels, setNovels] = useState<NovelData[]>([]);
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
        {novelsData.map((novel: NovelData) => (
          <NoveListItem key={novel.id} novel={novel} />
        ))}
      </section>
    </article>
  );
};

export default Novels;
