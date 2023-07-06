import { useState } from 'react';
import MainWrapper from './components/MainWrapper/MainWrapper';
import SideNavBar from './components/SideNavBar/SideNavBar';

function App() {
  const [showMenu, setShowMenu] = useState('eighth-notes');
  const [selectedStickings, setSelectedStickings] = useState<{
    [key: string]: string;
  }>({});

  const handleNavClick = (id: string): void => {
    setShowMenu(id);
    setSelectedStickings({});
  };

  const handleFormChange = (beatName: string, children: string) => {
    if (beatName === 'row') {
      setSelectedStickings({
        'beat-1': children,
        'beat-2': children,
        'beat-3': children,
        'beat-4': children,
      });
      return;
    }
    setSelectedStickings({
      ...selectedStickings,
      [beatName]: children,
    });
  };

  const handleResetClick = () => {
    setSelectedStickings({});
  };

  console.log(selectedStickings);

  return (
    <>
      <SideNavBar onNavClick={handleNavClick} />
      <MainWrapper
        displayMenu={showMenu}
        onFormChange={handleFormChange}
        onReset={handleResetClick}
        selectedStickings={selectedStickings}
      />
    </>
  );
}

export default App;
