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
