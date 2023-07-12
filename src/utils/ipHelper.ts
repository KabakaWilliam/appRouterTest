import { IPResponse, extendedIPResponse } from "@/types/ipStuff";
import axios from "axios";

export const fetchIPServer = async () => {
  const { data } = await axios.get("http://ip-api.com/json/");
  const FINAL_IP = data;
  // console.log(`final IP:`, FINAL_IP);
  return FINAL_IP;
};

export const fetchIPClient = async (): Promise<extendedIPResponse> => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_PROD_URL}/api/ip`
  );
  return data;
};
