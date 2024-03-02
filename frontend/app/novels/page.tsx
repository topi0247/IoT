import { NoveListItem } from "./components/novelListItem";
import { NovelData } from "@/src/utils/types/novelTypes";

const getProjects = async () => {
  const fetchData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/novels`);
  const novels = await fetchData.json();
  return novels;
};

const Novels = async () => {
  const novels = await getProjects();
  return (
    <article className="bg-white p-7 rounded-xl">
      <h2 className="text-semibold text-xl border-b border-slate-500">
        リスト
      </h2>
      <section className="my-5 flex flex-col gap-2">
        {novels.map(({ novel }: { novel: NovelData }) => {
          return <NoveListItem key={novel.id} novel={novel} />;
        })}
      </section>
    </article>
  );
};

export default Novels;
