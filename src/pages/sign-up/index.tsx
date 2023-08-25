import { SignUp } from "@clerk/nextjs";
import React from "react";

import { Main } from "@/base/Onboarding";
import { Meta } from "@/layouts/Meta";
import { AppConfig } from "@/utils/AppConfig";

const Register = () => {
  return (
    <Main
      meta={
        <Meta
          title={`Register - ${AppConfig.title}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="flex h-screen items-center justify-center">
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary:
                "bg-slate-800 hover:bg-slate-700 text-sm normal-case py-3",
              formFieldInput: "rounded-md",
            },
          }}
        />
      </div>
    </Main>
  );
};

export default Register;
