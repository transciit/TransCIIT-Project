import '../styles/global.css';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import ProtectedRoute from '@/components/ProtectedRoute';
import { AuthContextProvider } from '@/lib/auth';

const noAuthRequired = ['/', '/onboarding/signin', '/onboarding/signup'];

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
