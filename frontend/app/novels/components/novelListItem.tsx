import { NovelData } from "@/src/utils/types/novelTypes";
import Link from "next/link";

export const NoveListItem = ({ novel }: { novel: NovelData }) => {
  return (
    <dl className="flex items-end border-b border-slate-300 justify-between pb-2">
      <dt className="w-2/4">
        <Link href="#" className="hover:opacity-50 transition-all">
          {novel.title}
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
