import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/news/NewsList";

export default async function Latest() {
  const latestNews = await getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
