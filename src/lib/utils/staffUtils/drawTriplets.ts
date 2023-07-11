import { StaveNote } from 'vexflow';
import annotate from './annotate';

const drawTripletNotes = (
  selectedStickings: { [key: string]: string },
  beatName: string
): StaveNote[] => {
  const objKeys = Object.keys(selectedStickings);
  const value = selectedStickings[beatName];

  if (!objKeys.includes(beatName) || value.length !== 3) {
    return [
      new StaveNote({
        keys: ['A/4'],
        duration: '8',
      }),
      new StaveNote({
        keys: ['A/4'],
        duration: '8',
      }),
      new StaveNote({
        keys: ['A/4'],
        duration: '8',
      }),
    ];
  } else {
    return [
      new StaveNote({
        keys: ['A/4'],
        duration: '8',
      }).addModifier(annotate(value[0])),
      new StaveNote({
        keys: ['A/4'],
        duration: '8',
      }).addModifier(annotate(value[1])),
      new StaveNote({
        keys: ['A/4'],
        duration: '8',
      }).addModifier(annotate(value[2])),
    ];
  }
};

export default drawTripletNotes;
