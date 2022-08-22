import '../styles/global.css';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import type { AppProps } from 'next/app';

import { AuthContextProvider } from '@/context/AuthContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AuthContextProvider>
    <Component {...pageProps} />
  </AuthContextProvider>
);

export default MyApp;
