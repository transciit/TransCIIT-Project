import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/onboarding/signin");
    }
  }, [router, user]);

  return <>{user ? children : null}</>;
};

export default ProtectedRoute;
