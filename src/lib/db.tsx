import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

import { db } from '../config/firebase';

export const getFeeds = async () => {
  const q = query(collection(db, 'feed'), where('matched', '==', false));
  try {
    const querySnapshot = await getDocs(q);
    const feeds: any[] = [];
    querySnapshot.forEach((document) => {
      feeds.push({ id: document.id, ...document.data() });
    });
    return { feeds };
  } catch (err: any) {
    return { err };
  }
};

export const getFeedDetails = async (id) => {
  try {
    const docRef = doc(db, 'feed', id);
    const docSnap = await getDoc(docRef);
    const feedDetail: any[] = [];
    feedDetail.push({ id: docSnap.id, ...docSnap.data() });
    return { feedDetail };
  } catch (err: any) {
    return { err };
  }
};

export const getInvested = async (uid) => {
  const q = query(collection(db, 'feed'), where('entrepreneurId', '==', uid));
  try {
    const querySnapshot = await getDocs(q);
    const investments: any[] = [];
    querySnapshot.forEach((document) => {
      investments.push({ id: document.id, ...document.data() });
    });
    return { investments };
  } catch (err: any) {
    return { err };
  }
};

export const getInvestmentDetails = async (id) => {
  try {
    const docRef = doc(db, 'feed', id);
    const docSnap = await getDoc(docRef);
    const investmentDetail: any[] = [];
    investmentDetail.push({ id: docSnap.id, ...docSnap.data() });
    return { investmentDetail };
  } catch (err: any) {
    return { err };
  }
};
