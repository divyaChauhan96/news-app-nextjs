import { getMonthName } from "@/utility/dateUtility";
import Link from "next/link";

export default async function ArchiveHeader({
  year,
  tabs,
  month,
  isYearHeader,
}) {
  function getCurrentPathClass(tabValue) {
    return month == tabValue || year == tabValue ? "active" : undefined;
  }
  return (
    <header className="archive-header">
      <nav>
        <ul>
          {tabs?.map((tab) => (
            <li key={tab}>
              <Link
                href={
                  isYearHeader ? `/archive/${tab}` : `/archive/${year}/${tab}`
                }
                className={getCurrentPathClass(tab)}
              >
                {isYearHeader ? tab : getMonthName(tab)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
