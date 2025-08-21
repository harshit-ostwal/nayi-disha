"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/auth/register");
  });

  return <div>Page</div>;
}

export default Page;
