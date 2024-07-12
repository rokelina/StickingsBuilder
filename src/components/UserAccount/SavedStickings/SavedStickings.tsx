import { useEffect, useState } from 'react';
import { getStickings } from '../../../firebase/firestore';
import { DocumentData } from 'firebase/firestore';
import Button from '../../Button/Button';
import './SavedStickings.css';
import { useAuth } from '../../../context/authContext/useAuth';

const SavedStickings = () => {
  const { authUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [savedStickings, setSavedStickings] = useState<
    DocumentData[] | undefined
  >(undefined);
  const [showStickings, setShowStickings] = useState(true);
  const handleOnClick = () => {
    setShowStickings(!showStickings);
  };
  useEffect(() => {
    async function fetchData() {
      if (authUser) {
        const stickings = await getStickings(authUser.uid);
        setSavedStickings(stickings);
        setIsLoading(false);
        console.log(stickings);
      }
    }
    fetchData();
  }, [authUser]);

  return (
    <div className="saved-stickings-card">
      <Button
        idName={'show-saved-stickins'}
        children={'View my saved stickings'}
        onBtnClick={handleOnClick}
      />
      {!isLoading ? (
        showStickings &&
        (savedStickings ? (
          savedStickings.map((sticking) => (
            <div key={sticking.id}>
              {Object.values(sticking.sticking).toString()}
            </div>
          ))
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
