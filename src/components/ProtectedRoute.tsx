import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { useAuth } from '@/lib/auth';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/onboarding/signin');
    }
  }, [router, user]);

  return <>{user ? children : null}</>;
};

export default ProtectedRoute;
