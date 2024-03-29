import { useState } from 'react';

/** Stickings form control. Returns an object with the current selected stickings, and
 onFormChange handler */
export function useSelectStickings() {
  const [selectedStickings, setSelectedStickings] = useState<{
    [key: string]: string;
  }>({});

  const handleStickingsChange = (beatName: string, children: string) => {
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

  const selectedStickingsProps = {
    selectedStickings: selectedStickings,
    onFormChange: handleStickingsChange,
  };

  return selectedStickingsProps;
}
