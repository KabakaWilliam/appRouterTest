"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const fetchIP = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_PROD_URL}/api/ip`
  );
  const FINAL_IP = data.ipAddress as string;
  console.log(`final IP:`, FINAL_IP);
  return FINAL_IP;
};

export const IpBar = async () => {
  const [finalIP, setFinalIP] = useState("");
  useEffect(() => {
    fetchIP().then((ip) => setFinalIP(ip));
  }, [finalIP]);

  return <div>{`Your IP address is : ${finalIP}`}</div>;
};
