// file for writing library functions

"use server";
import { DUMMY_NEWS } from "@/dummyNews";

// A method that returns 1st three news from the dummy news data
export async function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

// A method to filter out the years list from the dummy data available
export async function getNewsYears() {
  const yearsArray = [];
  DUMMY_NEWS.map((news) => {
    let year = new Date(news.date).getFullYear();
    if (!yearsArray.includes(year)) {
      yearsArray.push(year);
    }
  });
  return yearsArray.sort((yearOne, yearTwo) => {
    return yearOne - yearTwo;
  });
}

// A method to filter news on the basis of years
export async function getNewsForYear(year) {
  return DUMMY_NEWS.filter((news) => {
    return new Date(news.date).getFullYear() == year;
  });
}

// To get months for a particular year
export async function getAvailableNewsMonths(year) {
  const yearNews = await getNewsForYear(year);
  const months = yearNews.map((monthData) => {
    return new Date(monthData?.date).getMonth();
  });
  console.log(months);
}
