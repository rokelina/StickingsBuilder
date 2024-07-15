import { useEffect, useState } from 'react';
import { deleteSticking } from '../../../firebase/firestore';
import Button from '../../Button/Button';
import './SavedStickings.css';
import { useAuth } from '../../../context/authContext/useAuth';
import { useFetchStickings } from '../../../hooks/useFetchStickings';

const SavedStickings = () => {
  const [deleteId, setDeleteId] = useState('');
  const [showStickings, setShowStickings] = useState(true);
  const { authUser } = useAuth();
  const { savedStickings, isLoading } = useFetchStickings(authUser, deleteId);

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

  useEffect(() => resetDeleteId(), []);

  console.log(deleteId);
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
