import { RoutePath } from "@/src/utils/path/path";
import { NovelData } from "@/src/utils/types/novelTypes";
import Link from "next/link";

export const NoveListItem = ({ novel }: { novel: NovelData }) => {
  return (
    <dl className="flex items-end border-b border-slate-300 justify-between pb-2">
      <dt className="flex w-21/5 items-center mx-4">
        <Link
          href={RoutePath.Novel(novel.id)}
          className="hover:opacity-50 transition-all"
        >
          {novel.title}
        </Link>
      </dt>
      <dd className="text-xs text-stone-400/95">
        <ul className="flex">
          <li className="border-r border-slate-400 px-2 text-end">
            最終更新日 {novel.updatedAt}
          </li>
          <li className="border-r border-slate-400 px-2 text-end">
            作成日 {novel.createdAt}
          </li>
          <li className="px-2 text-end">総文字数 {novel.totalCharacters}</li>
        </ul>
      </dd>
    </dl>
  );
};
