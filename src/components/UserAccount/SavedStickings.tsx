import { useState } from 'react';
import { deleteSticking } from '../../firebase/firestore';
import Button from '../Button/Button';
import './SavedStickings/SavedStickings.css';
import { useAuth } from '../../context/authContext/useAuth';
import { useFetchStickings } from '../../hooks/useFetchStickings';
import SavedStickingsList from './SavedStickings/SavedStickingsList';
import SavedDrillsList from './SavedDrills/SavedDrills';

const SavedStickingsAndDrills = () => {
  const [deleteId, setDeleteId] = useState('');
  const [showStickings, setShowStickings] = useState(true);
  const [showDrills, setShowDrills] = useState(true);
  const { authUser } = useAuth();
  const { savedStickings, isLoading } = useFetchStickings(authUser);

  const handleOnStickingsListClick = () => {
    setShowStickings((prevState) => !prevState);
  };
  const handleOnDrillsListClick = () => {
    setShowDrills((prevState) => !prevState);
  };
  const handleOnDeleteClick = (id: string) => {
    if (authUser) {
      setDeleteId(id);
      deleteSticking(id, authUser.uid);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        margin: '4rem',
      }}
    >
      <div className="saved-stickings-card">
        <Button
          idName={'show-saved-stickins'}
          children={'View my saved stickings'}
          onBtnClick={handleOnStickingsListClick}
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
      <div className="saved-stickings-card">
        <Button
          idName={'show-saved-drills'}
          children={'View my saved Drills'}
          onBtnClick={handleOnDrillsListClick}
        />
        {!isLoading ? showDrills && <SavedDrillsList /> : <div>Loading</div>}
      </div>
    </div>
  );
};
export default SavedStickingsAndDrills;
