import '../styles/global.css';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import ProtectedRoute from '@/components/ProtectedRoute';
import { AuthContextProvider } from '@/lib/auth';

const authRequired = ['/feed', '/user'];

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <AuthContextProvider>
      {authRequired.includes(router.pathname) ? (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      ) : (
        <Component {...pageProps} />
      )}
      ;
    </AuthContextProvider>
  );
};

export default MyApp;
