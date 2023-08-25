import "react-loading-skeleton/dist/skeleton.css";

import { useAuth, useUser } from "@clerk/nextjs";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Main } from "@/base/Onboarding";
import AccountType from "@/components/account/AccountType";
import Loading from "@/components/utils/Loading";
import { db } from "@/config/firebase";
import { Meta } from "@/layouts/Meta";
import { useFirebaseAuth } from "@/lib/auth";
import { AppConfig } from "@/utils/AppConfig";

const Index = () => {
  const { getToken } = useAuth();
  const { signin } = useFirebaseAuth();
  const { user } = useUser();
  const router = useRouter();
  const [error, setError] = useState(null);
  const [account, setAccount] = useState(0);

  useEffect(() => {
    const signInWithClerk = async () => {
      try {
        const firebaseToken = await getToken({
          template: "integration_firebase",
        });

        if (!firebaseToken) {
          return;
        }
        await signin(firebaseToken);

        if (user) {
          const docRef = doc(db, "users", user.id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            if (docSnap.data().type) {
              const data = docSnap.data().type;
              if (docSnap.data().type.includes("student")) {
                const response = await user.update({
                  unsafeMetadata: { data },
                });
                if (response) {
                  setAccount(200);
                  router.push("/students");
                }
              } else {
                setAccount(200);
                router.push("/entrepreneur");
              }
            } else {
              setAccount(400);
            }
          } else {
            setAccount(500);
          }
        }
      } catch (err: any) {
        setError(err);
      }
    };

    signInWithClerk();
  }, [user]);

  // const run = async () => {
  //   const docSnap = await getDoc(ref);

  //   if (docSnap.exists()) {
  //     if (docSnap.data().type.includes("student")) {
  //       if (docSnap.data().rate === undefined) {
  //         await updateDoc(ref, {
  //           rate: "Not Specified",
  //           liked: [5],
  //         });
  //         router.push("/students");
  //       } else {
  //         router.push("/students");
  //       }
  //     } else {
  //       router.push("/entrepreneur");
  //     }
  //   }
  // };
  return (
    <Main
      meta={
        <Meta
          title={`Redirecting - ${AppConfig.title}`}
          description={AppConfig.description}
        />
      }
    >
      <div>
        <div>
          {account === 0 && (
            <div className="flex h-screen items-center justify-center">
              <Loading />
            </div>
          )}
        </div>
        <div>
          {account === 200 && (
            <div className="h-screen w-full bg-slate-100 ">
              <div className="mt-7 text-xs">{error}</div>
            </div>
          )}
        </div>

        <div className="flex h-screen items-center justify-center">
          {account === 500 && (
            <div className="w-2/3">
              <AccountType code={account} />
            </div>
          )}
          {account === 400 && (
            <div className="w-2/3">
              <AccountType code={account} />
            </div>
          )}
        </div>
      </div>
    </Main>
  );
};

export default Index;
