import { getNewsYears } from "@/lib/news";
import Link from "next/link";

export default async function ArchiveHeader() {
  const years = await getNewsYears();
  return (
    <header className="archive-header">
      <nav>
        <ul>
          {years?.map((year) => (
            <li key={year}>
              <Link href={`/archive/${year}`}>{year}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
