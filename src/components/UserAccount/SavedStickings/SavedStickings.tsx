import { useState } from 'react';
import Button from '../../Button/Button';
import './SavedStickings.css';

const SavedStickings = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [savedStickings, setSavedStickings] = useState([]);
  const [showStickings, setShowStickings] = useState(true);
  const handleOnClick = () => {
    setShowStickings(!showStickings);
  };

  return (
    <div className="saved-stickings-card">
      <Button
        idName={'show-saved-stickins'}
        children={'View my saved stickings'}
        onBtnClick={handleOnClick}
      />
      {showStickings && (
        <div>
          <p>Hello</p>
        </div>
      )}
    </div>
  );
};
export default SavedStickings;
