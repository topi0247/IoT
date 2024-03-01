import Link from "next/link";

const NoveListItem = () => {
  return (
    <dl className="flex items-end border-b border-slate-300 justify-between pb-2">
      <dt className="w-2/4">
        <Link href="#" className="hover:opacity-50 transition-all">
          タイトルタイトルタイトルタイトルタイトル
        </Link>
      </dt>
      <dd className="text-sm text-stone-400/95">
        <ul className="flex">
          <li className="border-r border-slate-400 px-2">
            最終更新日 2021/10/10
          </li>
          <li className="border-r border-slate-400 px-2">作成日 2021/10/10</li>
          <li className="px-2">総文字数 3,000</li>
        </ul>
      </dd>
    </dl>
  );
};

const Novels = () => {
  return (
    <article className="bg-white p-7 rounded-xl">
      <h2 className="text-semibold text-xl border-b border-slate-500">
        リスト
      </h2>
      <section className="my-5 flex flex-col gap-2">
        <NoveListItem />
        <NoveListItem />
        <NoveListItem />
        <NoveListItem />
        <NoveListItem />
        <NoveListItem />
        <NoveListItem />
        <NoveListItem />
        <NoveListItem />
      </section>
    </article>
  );
};

export default Novels;
