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
  DocumentData,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore';
import { db } from './firebaseConfig';
import { User } from 'firebase/auth';

const USERS_COLLECTION = 'users';
const STICKINGS_COLLECTION = 'stickings';
const DRILLS_COLLECTION = 'drills';

//Add user
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

//Delete user

//Add Sticking
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

// Fetch stickings
export async function getStickings(
  uid: string,
  setSavedStickings: React.Dispatch<
    React.SetStateAction<DocumentData[] | undefined>
  >,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  const stickingsQuery = query(
    collection(db, USERS_COLLECTION, uid, STICKINGS_COLLECTION),
    orderBy('dateCreated', 'desc')
  );
  const unsubscribe = onSnapshot(
    stickingsQuery,
    async (snapshot) => {
      let allStickings: DocumentData[] = [];

      for (const documentSnapshot of snapshot.docs) {
        const data = documentSnapshot.data();
        if (data && data['sticking']) {
          allStickings = [
            ...allStickings,
            { id: documentSnapshot.id, sticking: data['sticking'] },
          ];
        }
      }
      setSavedStickings(allStickings);
      setIsLoading(false);
      console.log(allStickings);
    },
    (error) => {
      console.log(error);
    }
  );
  return unsubscribe;

  // const stickingsSnapshot = await getDocs(stickingsQuery);

  // if (stickingsSnapshot.empty) {
  //   return undefined;
  // }

  // let allStickings: DocumentData[] = [];

  // for (const documentSnapshot of stickingsSnapshot.docs) {
  //   const data = documentSnapshot.data();
  //   if (data && data['sticking']) {
  //     allStickings = [
  //       ...allStickings,
  //       { id: documentSnapshot.id, sticking: data['sticking'] },
  //     ];
  //   }
  // }

  // return allStickings;
}

// Delete stickings
export async function deleteSticking(id: string, uid: string) {
  await deleteDoc(doc(db, USERS_COLLECTION, uid, STICKINGS_COLLECTION, id));
}

// Create drill

// Update drill

//Get drills

//Delete drill
