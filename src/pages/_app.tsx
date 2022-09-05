import '../styles/global.css';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';

import ProtectedRoute from '@/components/ProtectedRoute';
import { AuthContextProvider } from '@/lib/auth';

export { reportWebVitals } from 'next-axiom';

const authRequired = [
  '/student',
  '/entrepreneur',
  '/user',
  '/mp/student',
  '/mp/entrepreneur',
  '/skills',
  '/project',
];

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <AuthContextProvider>
      {authRequired.includes(router.pathname) ? (
        <ProtectedRoute>
          <NextNProgress
            color="#32CD32"
            options={{ easing: 'ease', speed: 500 }}
          />
          <Component {...pageProps} />
        </ProtectedRoute>
      ) : (
        <>
          <NextNProgress
            color="#32CD32"
            options={{ easing: 'ease', speed: 500 }}
          />
          <Component {...pageProps} />
        </>
      )}
    </AuthContextProvider>
  );
};

export default MyApp;
