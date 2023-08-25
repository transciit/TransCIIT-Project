import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const RedirectionRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/feed");
    }
  }, [router, user]);

  return <>{children}</>;
};

export default RedirectionRoute;
