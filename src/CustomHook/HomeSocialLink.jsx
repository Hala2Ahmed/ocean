import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import i18next from "i18next";

export function useHomeData() {
  return useQuery({
    queryKey: ["homeData", i18next.language],
    queryFn: () => fetchHomeData(i18next.language === "ar" ? "ar" : "en"),
  });
}

async function fetchHomeData(lang) {
  try {
    const response = await axios.get(
      "https://dashboard.ocean-it.net/api/home",
      {
        headers: { lang: lang },
      }
    );
    // Return the full response data, not response.data.data
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
