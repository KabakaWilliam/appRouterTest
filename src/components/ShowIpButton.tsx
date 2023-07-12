"use client";

import { toast } from "@/hooks/use-toast";
import { fetchIPClient } from "@/utils/ipHelper";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import React, { useState } from "react";

const ShowIpButton = async () => {
  const [IpNumber, setIpNumber] = useState("");

  const { mutate: loadUserIP, isLoading } = useMutation({
    mutationFn: async () => {
      // const ip = await fetchIP();
      // return ip;
      return "32";
    },
    onError: (err) => {
      // if (err instanceof AxiosError) {
      //   if (err.response?.status === 409) {
      //     return toast({})
      //   }
      // }
      if (err) {
        return toast({
          title: "something wen wrong ",
          description: "Try again another time.",
          variant: "destructive",
        });
      }
    },
    onSuccess: (data) => {
      setIpNumber(data);
      return toast({
        // title: "Your IP has been found",
        description: `Your IP has been found IP @: ${data}`,
      });
    },
  });

  const clickHelper = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    loadUserIP();
  };

  return (
    <button
      className="bg-slate-600 rounded-lg w-[200px] truncate p-2"
      onClick={clickHelper}
    >{`Your IP: ${IpNumber} `}</button>
  );
};

export default ShowIpButton;
