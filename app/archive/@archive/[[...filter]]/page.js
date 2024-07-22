import ArchiveHeader from "@/components/header/ArchiveHeader";
import NewsList from "@/components/news/NewsList";

import {
  getAvailableNewsMonths,
  getNewsForMonthYear,
  getNewsForYear,
  getNewsYears,
} from "@/lib/news";

export default async function FilteredNewsPage({ params }) {
  const filterCriteria = params.filter;
  let yearDataForHeader,
    monthDataForHeader = [];

  let newsList = [];
  let year = filterCriteria?.[0];
  let month = filterCriteria?.[1];
  yearDataForHeader = await getNewsYears();
  if (year) {
    monthDataForHeader = await getAvailableNewsMonths(year);
    if (month) {
      newsList = await getNewsForMonthYear(year, month);
    } else {
      newsList = await getNewsForYear(year);
    }
  }

  return (
    <>
      <ArchiveHeader tabs={yearDataForHeader} year={year} isYearHeader={true} />
      <ArchiveHeader
        tabs={monthDataForHeader}
        year={year}
        month={month}
        isYearHeader={false}
      />
      <NewsList news={newsList} />
    </>
  );
}
