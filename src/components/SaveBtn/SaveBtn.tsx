import { FaSave } from 'react-icons/fa';
import Button from '../Button/Button';
import { useAuth } from '../../context/authContext/useAuth';
import { addSticking } from '../../firebase/firestore';
import { checkDuplicateObject } from './checkDuplicateObject';
import { useFetchStickings } from '../../hooks/useFetchStickings';
import './SaveBtn.css';

//this should save the current sticking if there's a user logged in and show a
// 'save successful' modal, or show the login modal if there isn't any user

type SaveBtnProps = {
  currentSticking: { [key: string]: string };
};

const SaveBtn = ({ currentSticking }: SaveBtnProps) => {
  const { authUser } = useAuth();
  const { savedStickings } = useFetchStickings(authUser);

  const handleOnSave = () => {
    //check if user is logged in
    if (!authUser) {
      alert('Log in to save stickings to your account');
      return;
    }
    //checks if all beats are selected
    if (Object.keys(currentSticking).length < 4) {
      alert('Select all beats to save!');
      return;
    }
    //checks for duplicates
    if (savedStickings) {
      for (const sticking of savedStickings) {
        const isDuplicate = checkDuplicateObject(
          sticking.sticking,
          currentSticking
        );
        if (isDuplicate) {
          alert('You already saved that sticking to your account');
          return;
        }
      }
    }
    addSticking(currentSticking, authUser.uid);
  };
  return (
    <div
      className="save-btn"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <Button
        idName="save-btn"
        children={
          <>
            <FaSave size="1.5rem" />
            <span
              style={{ paddingInlineStart: '0.5rem' }}
              aria-label="Save Sticking"
            >
              SAVE
            </span>
          </>
        }
        onBtnClick={handleOnSave}
      />
    </div>
  );
};
export default SaveBtn;
