import { useState, useEffect } from 'react';
import { AuthUser } from '../context/authContext/AuthUserContext';
import { getStickings } from '../firebase/firestore';
import { DocumentData } from 'firebase/firestore';

export const useFetchStickings = (authUser: AuthUser, deleteId?: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [savedStickings, setSavedStickings] = useState<
    DocumentData[] | undefined
  >(undefined);

  const fetchStickings = async (authUser: AuthUser) => {
    if (authUser) {
      const stickings = await getStickings(authUser.uid);
      setSavedStickings(stickings);
      setIsLoading(false);
      console.log(stickings);
    }
  };
  useEffect(() => {
    if (authUser) {
      fetchStickings(authUser);
    }
  }, [authUser, deleteId]);

  return { savedStickings, isLoading };
};
