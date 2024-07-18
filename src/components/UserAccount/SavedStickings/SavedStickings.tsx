import { useState } from 'react';
import { deleteSticking } from '../../../firebase/firestore';
import Button from '../../Button/Button';
import './SavedStickings.css';
import { useAuth } from '../../../context/authContext/useAuth';
import { useFetchStickings } from '../../../hooks/useFetchStickings';
import SavedStickingsList from './SavedStickingsColumn';

const SavedStickings = () => {
  const [deleteId, setDeleteId] = useState('');
  const [showStickings, setShowStickings] = useState(true);
  const { authUser } = useAuth();
  const { savedStickings, isLoading } = useFetchStickings(authUser);

  const handleOnClick = () => {
    setShowStickings((prevState) => !prevState);
  };
  const handleOnDeleteClick = (id: string) => {
    if (authUser) {
      setDeleteId(id);
      deleteSticking(id, authUser.uid);
    }
  };

  return (
    <div className="saved-stickings-card">
      <Button
        idName={'show-saved-stickins'}
        children={'View my saved stickings'}
        onBtnClick={handleOnClick}
      />
      {!isLoading ? (
        showStickings && (
          <SavedStickingsList
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
