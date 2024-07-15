import { useEffect, useState } from 'react';
import { getStickings, deleteSticking } from '../../../firebase/firestore';
import { DocumentData } from 'firebase/firestore';
import Button from '../../Button/Button';
import './SavedStickings.css';
import { useAuth } from '../../../context/authContext/useAuth';

const SavedStickings = () => {
  const { authUser } = useAuth();
  const [isLoadingStickings, setIsLoadingStickings] = useState(true);
  const [savedStickings, setSavedStickings] = useState<
    DocumentData[] | undefined
  >(undefined);
  const [deleteId, setDeleteId] = useState('');
  const [showStickings, setShowStickings] = useState(true);
  const handleOnClick = () => {
    setShowStickings(!showStickings);
  };

  const handleOnDeleteClick = (id: string) => {
    if (authUser) {
      setDeleteId(id);
      deleteSticking(id, authUser.uid);
    }
  };

  const resetDeleteId = () => {
    setDeleteId('');
  };

  const fetchStickings = async (uid: string) => {
    const stickings = await getStickings(uid);
    setSavedStickings(stickings);
    setIsLoadingStickings(false);
    console.log(stickings);
  };
  console.log(deleteId);

  useEffect(() => {
    if (authUser) {
      return () => {
        fetchStickings(authUser.uid);
        resetDeleteId();
      };
    }
  }, [authUser, deleteId]);

  return (
    <div className="saved-stickings-card">
      <Button
        idName={'show-saved-stickins'}
        children={'View my saved stickings'}
        onBtnClick={handleOnClick}
      />
      {!isLoadingStickings ? (
        showStickings &&
        (savedStickings ? (
          savedStickings.map(
            (sticking) =>
              sticking.id !== deleteId && (
                <div key={sticking.id}>
                  {Object.values(sticking.sticking).toString()}
                  <button
                    onClick={() => {
                      handleOnDeleteClick(sticking.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              )
          )
        ) : (
          <div>You haven't saved any stickings yet!</div>
        ))
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
export default SavedStickings;
