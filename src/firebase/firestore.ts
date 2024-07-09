import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  where,
  Timestamp,
} from 'firebase/firestore';
import { db } from './firebaseConfig';
import { User } from 'firebase/auth';

const USER_COLLECTION = 'users';
const STICKING_COLLECTION = 'stickings';
const DRILL_COLLECTION = 'drills';

export async function addUserToDatabase(user: User) {
  const userRef = doc(collection(db, USER_COLLECTION), user.uid);
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
