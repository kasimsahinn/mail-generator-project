import { IHomeProps } from "@/types/home";
import { API_LIST } from "./constants";

const authHeaders: HeadersInit = {
  'Content-Type': 'application/json',
  'Accept-Language': 'tr',
};

const getHomePageData = async () => {
  const req = await fetch(API_LIST.cardList, {
    method: 'GET',
    headers: {
      ...authHeaders,
    },
  });
  const res: IHomeProps = await req.json();

  return res;
};



export { getHomePageData };
