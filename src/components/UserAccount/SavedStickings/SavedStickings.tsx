import { useEffect, useState } from 'react';
import { getStickings, StickingsArray } from '../../../firebase/firestore';
import Button from '../../Button/Button';
import './SavedStickings.css';
import { useAuth } from '../../../context/authContext/useAuth';

const SavedStickings = () => {
  const { authUser } = useAuth();
  // const [isLoading, setIsLoading] = useState(true);
  const [savedStickings, setSavedStickings] = useState<
    StickingsArray | undefined
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
      {showStickings &&
        (savedStickings ? (
          savedStickings.map((sticking) => (
            <div>{Object.values(sticking).toString()}</div>
          ))
        ) : (
          <div>You haven't saved any stickings yet!</div>
        ))}
    </div>
  );
};
export default SavedStickings;
