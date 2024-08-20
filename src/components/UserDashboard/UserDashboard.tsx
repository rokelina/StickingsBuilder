import SavedStickingsList from './SavedStickings/SavedStickingsList';

import { useAuth } from '../../context/authContext/useAuth';
import { deleteSticking } from '../../firebase/firestore';
import { useState } from 'react';
import { useFetchStickings } from '../../hooks/useFetchStickings';

import { LinearProgress } from '@mui/material';
import './SavedStickings/SavedStickings.css';
import './UserDashboard.css';

const UserDashboard = () => {
  const [deleteId, setDeleteId] = useState('');
  const { authUser } = useAuth();
  const { savedStickings, isLoading } = useFetchStickings(authUser);

  const handleOnDeleteClick = (id: string) => {
    if (authUser) {
      setDeleteId(id);
      deleteSticking(id, authUser.uid);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="saved-stickings-card">
        <h2 className="saved-stickings-title">My Saved Stickings</h2>
        {!isLoading ? (
          <SavedStickingsList
            savedStickings={savedStickings}
            deleteId={deleteId}
            onDelete={handleOnDeleteClick}
          />
        ) : (
          <LinearProgress sx={{ color: 'inherit', width: '50%' }} />
        )}
      </div>
    </div>
  );
};
export default UserDashboard;
