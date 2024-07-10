import { RiSave3Line } from 'react-icons/ri';
import Button from '../Button/Button';
import { useAuth } from '../../context/authContext/useAuth';
import { addSticking } from '../../firebase/firestore';

//this should save the current sticking if there's a user logged in and show a
// 'save successful' modal, or show the login modal if there isn't any user

type SaveBtnProps = {
  sticking: { [key: string]: string };
};

const SaveBtn = ({ sticking: selectedStickings }: SaveBtnProps) => {
  const { authUser } = useAuth();

  const handleSave = async () => {
    if (!authUser) {
      alert('Log in to save stickings to your account');
      return;
    }
    if (Object.keys(selectedStickings).length < 4) {
      alert('Select all beats to save!');
      return;
    }
    await addSticking(selectedStickings, authUser.uid);
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
