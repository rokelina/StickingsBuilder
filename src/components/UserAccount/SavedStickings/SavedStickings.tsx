import { useEffect, useState } from 'react';
import { deleteSticking } from '../../../firebase/firestore';
import Button from '../../Button/Button';
import './SavedStickings.css';
import { useAuth } from '../../../context/authContext/useAuth';
import { useFetchStickings } from '../../../hooks/useFetchStickings';
import SavedStickingsColumn from './SavedStickingsColumn';

const SavedStickings = () => {
  const [deleteId, setDeleteId] = useState('');
  const [showStickings, setShowStickings] = useState(true);
  const { authUser } = useAuth();
  const { savedStickings, isLoading } = useFetchStickings(authUser, deleteId);

  const handleOnClick = () => {
    setShowStickings((prevState) => !prevState);
  };
  const handleOnDeleteClick = async (id: string) => {
    if (authUser) {
      setDeleteId(id);
      await deleteSticking(id, authUser.uid);
    }
  };
  const resetDeleteId = () => {
    setDeleteId('');
  };

  useEffect(() => resetDeleteId(), []);

  return (
    <div className="saved-stickings-card">
      <Button
        idName={'show-saved-stickins'}
        children={'View my saved stickings'}
        onBtnClick={handleOnClick}
      />
      {!isLoading ? (
        showStickings && (
          <SavedStickingsColumn
            savedStickings={savedStickings}
            deleteId={deleteId}
            onDelete={handleOnDeleteClick}
          />
        )
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
export default SavedStickings;
