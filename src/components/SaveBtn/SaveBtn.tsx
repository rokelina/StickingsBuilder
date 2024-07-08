import { RiSave3Line } from 'react-icons/ri';
import Button from '../Button/Button';

//this should save the current sticking if there's a user logged in and show a
// 'save successful' modal, or show the login modal if there isn't any user

type SaveBtnProps = {
  onSave: () => void;
};

const SaveBtn = ({ onSave }: SaveBtnProps) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        idName="save-btn"
        children={
          <>
            SAVE <RiSave3Line size="1rem" />
          </>
        }
        onBtnClick={onSave}
      />
    </div>
  );
};
export default SaveBtn;
