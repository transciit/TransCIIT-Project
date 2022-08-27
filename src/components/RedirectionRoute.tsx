import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { useAuth } from '@/lib/auth';

const RedirectionRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/feed');
    }
  }, [router, user]);

  return <>{children}</>;
};

export default RedirectionRoute;
