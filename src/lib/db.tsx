import { doc, setDoc } from 'firebase/firestore';

import { db } from '@/config/firebase';

import { useAuth } from './auth';

export function CreateUser() {
  const { user } = useAuth();

  return setDoc(doc(db, 'users', user.uid), user);
}
