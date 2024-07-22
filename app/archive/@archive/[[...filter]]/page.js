//import NewsList from "@/components/news/NewsList";
import ArchiveHeader from "@/components/header/ArchiveHeader";
import { getNewsForYear } from "@/lib/news";

export default async function FilteredNewsPage({ params }) {
  const filterCriteria = params.filter;
  console.log("O/p-------------", filterCriteria);
  let year,
    month = null;
  if (filterCriteria?.length) {
  }
  // const news = await getNewsForYear(newsYear);

  return (
    <>
      <ArchiveHeader />
    </>
  );
}
