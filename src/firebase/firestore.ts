import {
  collection,
  doc,
  getDocs,
  getDoc,
  orderBy,
  query,
  setDoc,
  Timestamp,
  where,
} from 'firebase/firestore';
import { db } from './firebaseConfig';
import { User } from 'firebase/auth';

const USERS_COLLECTION = 'users';
const STICKINGS_COLLECTION = 'stickings';
const DRILL_COLLECTION = 'drills';

export type StickingsArray = { [key: string]: string }[];
export async function addUserToDatabase(user: User) {
  const userRef = doc(collection(db, USERS_COLLECTION), user.uid);
  const userDoc = await getDoc(userRef);
  if (!userDoc.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      dateCreated: Timestamp.now(),
    });
  }
}

export async function addSticking(
  sticking: { [key: string]: string },
  uid: string
) {
  try {
    const stickingRef = doc(
      collection(db, USERS_COLLECTION, uid, STICKINGS_COLLECTION)
    );
    await setDoc(stickingRef, {
      sticking: sticking,
      dateCreated: Timestamp.now(),
    });
    console.log('Sticking saved successfully');
  } catch (error) {
    console.error('Error saving sticking: ', error);
  }
}

export async function getStickings(uid: string) {
  const stickingsQuery = query(
    collection(db, USERS_COLLECTION, uid, STICKINGS_COLLECTION),
    orderBy('dateCreated', 'desc')
  );
  const stickingsSnapshot = await getDocs(stickingsQuery);

  if (stickingsSnapshot.empty) {
    return undefined;
  }

  let allStickings: StickingsArray = [];

  for (const documentSnapshot of stickingsSnapshot.docs) {
    const data = documentSnapshot.data();
    if (data && data['sticking']) {
      allStickings = [...allStickings, data['sticking']];
    }
  }

  return allStickings;
}
