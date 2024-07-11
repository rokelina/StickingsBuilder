import { RiSave3Line } from 'react-icons/ri';
import Button from '../Button/Button';
import { useAuth } from '../../context/authContext/useAuth';
import { addSticking, getStickings } from '../../firebase/firestore';
import { compareStickingObject } from './compareStickingObject';

//this should save the current sticking if there's a user logged in and show a
// 'save successful' modal, or show the login modal if there isn't any user

type SaveBtnProps = {
  currentSticking: { [key: string]: string };
};

const SaveBtn = ({ currentSticking }: SaveBtnProps) => {
  const { authUser } = useAuth();

  const handleSave = async () => {
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

    const savedStickigns = await getStickings(authUser.uid);
    //checks for duplicates
    if (savedStickigns) {
      for (const sticking of savedStickigns) {
        const areEqual = compareStickingObject(sticking, currentSticking);
        if (areEqual) {
          alert('You already saved that sticking to your account');
          return;
        }
      }
    }
    await addSticking(currentSticking, authUser.uid);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        idName="save-btn"
        children={
          <>
            SAVE <RiSave3Line size="1rem" />
          </>
        }
        onBtnClick={handleSave}
      />
    </div>
  );
};
export default SaveBtn;
