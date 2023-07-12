import { IPResponse, extendedIPResponse } from "@/types/ipStuff";
import axios from "axios";

export const fetchIPServer = async (IP?: string | null) => {
  const { data } = await axios.get(
    IP ? `http://ip-api.com/json/${IP}` : "http://ip-api.com/json/"
  );
  const FINAL_IP = data;
  // console.log(`final IP:`, FINAL_IP);
  // http://ip-api.com/json/143.198.102.253
  return FINAL_IP;
};

export const fetchIPClient = async (): Promise<extendedIPResponse> => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_PROD_URL}/api/ip`
  );
  return data;
};

export const fetchIPServerBland = async (IP: string | undefined) => {
  const { data } = await axios.get(
    IP ? `http://ip-api.com/json/${IP}` : "http://ip-api.com/json/"
  );
  const FINAL_IP = data;
  // console.log(`final IP:`, FINAL_IP);
  // http://ip-api.com/json/143.198.102.253
  return FINAL_IP;
};
