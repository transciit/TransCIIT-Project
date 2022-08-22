import '../styles/global.css';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import ProtectedRoute from '@/components/ProtectedRoute';
import { AuthContextProvider } from '@/context/AuthContext';

const noAuthRequired = ['/', '/onbaording/signin', '/onbaording/signup'];

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
      ;
    </AuthContextProvider>
  );
};

export default MyApp;
