import { collection, doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
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

export async function addSticking(
  sticking: { [key: string]: string },
  uid: string
) {
  try {
    const stickingRef = doc(
      collection(db, USER_COLLECTION, uid, STICKING_COLLECTION)
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

// export async function getStickings(
//   try {

//   } catch (error) {
//     console.log(error)
//   }
// )
