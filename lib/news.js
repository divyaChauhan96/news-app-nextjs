// file for writing library functions

"use server";
import { DUMMY_NEWS } from "@/dummyNews";

// A method that returns 1st three news from the dummy news data
export async function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}
