import { SignIn, useAuth } from "@clerk/nextjs";
import { signOut } from "firebase/auth";
import React, { useState } from "react";

import { Main } from "@/base/Onboarding";
import Loading from "@/components/utils/Loading";
import { auth } from "@/config/firebase";
import { Meta } from "@/layouts/Meta";
import { AppConfig } from "@/utils/AppConfig";

const Index = () => {
  const { isLoaded, userId } = useAuth();

  const [signedOut, setSignedOut] = useState(false);

  if (!isLoaded || !userId) {
    signOut(auth)
      .then(() => {
        setSignedOut(true);
      })
      .catch(() => {
        setSignedOut(true);
      });
  }

  return (
    <Main
      meta={
        <Meta
          title={`Login - ${AppConfig.title}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="flex h-screen items-center justify-center">
        {signedOut ? (
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary:
                  "bg-slate-800 hover:bg-slate-700 text-sm normal-case py-3",
                formFieldInput: "rounded-md",
              },
            }}
          />
        ) : (
          <Loading />
        )}
      </div>
    </Main>
  );
};

export default Index;
