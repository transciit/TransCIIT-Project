import "../styles/global.css";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

import { AuthContextProvider } from "@/lib/auth";

export { reportWebVitals } from "next-axiom";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ClerkProvider {...pageProps}>
      <AuthContextProvider>
        <>
          <NextNProgress
            color="#32CD32"
            options={{ easing: "ease", speed: 500 }}
          />
          <Component {...pageProps} />
        </>
      </AuthContextProvider>
    </ClerkProvider>
  );
};

export default MyApp;
