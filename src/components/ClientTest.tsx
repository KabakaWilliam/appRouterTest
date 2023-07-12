"use client";
import { fetchIPClient } from "@/utils/ipHelper";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
// https://github.com/TanStack/query/blob/main/examples/react/optimistic-updates-typescript/src/pages/index.tsx
const ClientTest = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["fetchIPClient"],
    queryFn: fetchIPClient,
  });

  return (
    <>
      {data && (
        <div className="w-screen h-screen flex flex-col gap-y-4 items-center justify-center">
          <h1>{data.query}</h1>
          <div>You have been here {data.pageViews} times 🫣</div>
        </div>
      )}
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Error</h1>}
    </>
  );
};

export default ClientTest;
