import BeatForm from './MenuForms/BeatForm';
import RowForm from './MenuForms/RowForm';
import Button from '../../Button/Button';
import { useState } from 'react';

interface MenuProps {
  permutations: { [key: string]: string };
  onFormChange: (beatName: string, children: string) => void;
  onReset: () => void;
}
function StickingsMenu({ permutations, onFormChange, onReset }: MenuProps) {
  const [checkBeatOne, setCheckedBeatOne] = useState({ isChecked: '' });
  const [checkBeatTwo, setCheckedBeatTwo] = useState({ isChecked: '' });
  const [checkBeatThree, setCheckedBeatThree] = useState({ isChecked: '' });
  const [checkBeatFour, setCheckedBeatFour] = useState({ isChecked: '' });

  const handleBeatOne = (labelFor: string) => {
    setCheckedBeatOne({ isChecked: labelFor });
  };
  const handleBeatTwo = (labelFor: string) => {
    setCheckedBeatTwo({ isChecked: labelFor });
  };
  const handleBeatThree = (labelFor: string) => {
    setCheckedBeatThree({ isChecked: labelFor });
  };
  const handleBeatFour = (labelFor: string) => {
    setCheckedBeatFour({ isChecked: labelFor });
  };

  const handleReset = () => {
    setCheckedBeatOne({ isChecked: '' });
    setCheckedBeatTwo({ isChecked: '' });
    setCheckedBeatThree({ isChecked: '' });
    setCheckedBeatFour({ isChecked: '' });
  };

  return (
    <div className="menu-card">
      <div className="menu-container">
        <BeatForm
          beatName="beat-1"
          children="Beat 1"
          checkedRadio={checkBeatOne}
          permutations={permutations}
          onFormChange={onFormChange}
          onCheckedRadio={handleBeatOne}
        />
        <BeatForm
          beatName="beat-2"
          children="Beat 2"
          checkedRadio={checkBeatTwo}
          permutations={permutations}
          onFormChange={onFormChange}
          onCheckedRadio={handleBeatTwo}
        />
        <BeatForm
          beatName="beat-3"
          children="Beat 3"
          checkedRadio={checkBeatThree}
          permutations={permutations}
          onFormChange={onFormChange}
          onCheckedRadio={handleBeatThree}
        />
        <BeatForm
          beatName="beat-4"
          children="Beat 4"
          checkedRadio={checkBeatFour}
          permutations={permutations}
          onFormChange={onFormChange}
          onCheckedRadio={handleBeatFour}
        />
        <RowForm permutations={permutations} />
      </div>
      <div className="menu-options">
        <Button
          idName="reset-button"
          children="Reset"
          onBtnClick={() => {
            onReset(), handleReset();
          }}
        />
      </div>
    </div>
  );
}

export default StickingsMenu;
