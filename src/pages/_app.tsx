import '../styles/global.css';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import type { AppProps } from 'next/app';

// import { AuthProvider } from '../lib/auth';

const MyApp = ({ Component, pageProps }: AppProps) => (
  // <AuthProvider>
  <Component {...pageProps} />
  // </AuthProvider>
);

export default MyApp;
