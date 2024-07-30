import { useState } from 'react';
import { deleteSticking } from '../../firebase/firestore';
import Button from '../Button/Button';
import './SavedStickings/SavedStickings.css';
import { useAuth } from '../../context/authContext/useAuth';
import { useFetchStickings } from '../../hooks/useFetchStickings';
import SavedStickingsList from './SavedStickings/SavedStickingsList';
import SavedDrillsList from './SavedDrills/SavedDrills';
import { LinearProgress } from '@mui/material';
import { MdOutlineAdd } from 'react-icons/md';

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
    <>
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
          <LinearProgress sx={{ color: 'inherit', width: '50%' }} />
        )}
      </div>
      <div className="saved-stickings-card">
        <div className="drills-bar">
          <Button
            idName={'show-saved-drills'}
            children={'View my saved Drills'}
            onBtnClick={handleOnDrillsListClick}
          />
          <Button
            idName="add-drill"
            children={
              <>
                <MdOutlineAdd size={'1.5rem'} />
                <span> Add Drill</span>
              </>
            }
          ></Button>
        </div>
        {!isLoading ? showDrills && <SavedDrillsList /> : <div>Loading</div>}
      </div>
    </>
  );
};
export default SavedStickingsAndDrills;
