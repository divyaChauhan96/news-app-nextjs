import NewsList from "@/components/news/NewsList";
import { getNewsForYear } from "@/lib/news";

export default async function FilteredNewsPage({ params }) {
  const newsYear = params.year;
  const news = await getNewsForYear(newsYear);

  return <NewsList news={news} />;
}
