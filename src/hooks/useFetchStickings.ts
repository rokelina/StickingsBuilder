import { useState, useEffect } from 'react';
import { AuthUser } from '../context/authContext/AuthUserContext';
import { getStickings } from '../firebase/firestore';
import { DocumentData } from 'firebase/firestore';

export const useFetchStickings = (authUser: AuthUser) => {
  const [isLoading, setIsLoading] = useState(true);
  const [savedStickings, setSavedStickings] = useState<
    DocumentData[] | undefined
  >(undefined);

  const fetchStickings = async (authUser: AuthUser) => {
    if (authUser) {
      const unsubscribe = await getStickings(
        authUser.uid,
        setSavedStickings,
        setIsLoading
      );
      // setSavedStickings(stickings);
      // setIsLoading(false);
      // console.log(stickings);
      return unsubscribe;
    }
  };
  useEffect(() => {
    if (authUser) {
      fetchStickings(authUser);
    }
  }, [authUser]);

  return { savedStickings, isLoading };
};
