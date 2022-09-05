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

export const getMyProjects = async (uid) => {
  const q = query(
    collection(db, 'feed'),
    where('matched', '==', false),
    where('entrepreneur_id', '==', uid)
  );
  try {
    const querySnapshot = await getDocs(q);
    const myProjects: any[] = [];
    querySnapshot.forEach((document) => {
      myProjects.push({ id: document.id, ...document.data() });
    });
    return { myProjects };
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

export const getUser = async (uid) => {
  try {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);
    const userType: any[] = [];
    userType.push({ id: docSnap.id, ...docSnap.data() });
    return { userType };
  } catch (err: any) {
    return { err };
  }
};

export const getUserAbout = async (uid) => {
  try {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);
    const userAbout: any[] = [];
    userAbout.push({ about: docSnap.data()?.about });
    return { userAbout };
  } catch (err: any) {
    return { err };
  }
};

export const getStudents = async () => {
  const q = query(collection(db, 'users'), where('type', '==', 'student'));
  try {
    const querySnapshot = await getDocs(q);
    const fetchStudents: any[] = [];
    querySnapshot.forEach((document) => {
      fetchStudents.push({ id: document.id, ...document.data() });
    });
    return { fetchStudents };
  } catch (err: any) {
    return { err };
  }
};

export const getMatchedE = async (uid) => {
  const q = query(
    collection(db, 'feed'),
    where('entrepreneur_id', '==', uid),
    where('matched', '==', true)
  );
  try {
    const querySnapshot = await getDocs(q);
    const fetchMatchedE: any[] = [];
    querySnapshot.forEach((document) => {
      fetchMatchedE.push({ id: document.id, ...document.data() });
    });
    return { fetchMatchedE };
  } catch (err: any) {
    return { err };
  }
};

export const getMatchedS = async (uid) => {
  const q = query(
    collection(db, 'feed'),
    where('student_id', '==', uid),
    where('matched', '==', true)
  );
  try {
    const querySnapshot = await getDocs(q);
    const fetchMatchedS: any[] = [];
    querySnapshot.forEach((document) => {
      fetchMatchedS.push({ id: document.id, ...document.data() });
    });
    return { fetchMatchedS };
  } catch (err: any) {
    return { err };
  }
};

export const getCategories = async () => {
  const q = query(collection(db, 'categories'));
  try {
    const querySnapshot = await getDocs(q);
    const fetchCategories: any[] = [];
    querySnapshot.forEach((document) => {
      fetchCategories.push({ id: document.id, ...document.data() });
    });
    return { fetchCategories };
  } catch (err: any) {
    return { err };
  }
};

export const getInvitesEntrepreneur = async (uid) => {
  const q = query(
    collection(db, 'invites'),
    where('matched', '==', false),
    where('entrepreneur_id', '==', uid)
  );
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

export const getInvitesStudent = async (uid) => {
  const q = query(
    collection(db, 'invites'),
    where('matched', '==', false),
    where('student_id', '==', uid)
  );
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

export const getInvitesDetails = async (id) => {
  try {
    const docRef = doc(db, 'invites', id);
    const docSnap = await getDoc(docRef);
    const feedDetail: any[] = [];
    feedDetail.push({ id: docSnap.id, ...docSnap.data() });
    return { feedDetail };
  } catch (err: any) {
    return { err };
  }
};

export const getBidsEntrepreneur = async (uid) => {
  const q = query(
    collection(db, 'bids'),
    where('matched', '==', false),
    where('entrepreneur_id', '==', uid)
  );
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

export const getBidsDetails = async (id) => {
  try {
    const docRef = doc(db, 'bids', id);
    const docSnap = await getDoc(docRef);
    const feedDetail: any[] = [];
    feedDetail.push({ id: docSnap.id, ...docSnap.data() });
    return { feedDetail };
  } catch (err: any) {
    return { err };
  }
};

export const getBidsStudent = async (uid) => {
  const q = query(
    collection(db, 'bids'),
    where('matched', '==', false),
    where('student_id', '==', uid)
  );
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
