import { StaveNote } from 'vexflow';
import annotate from '../../Staff/utils/annotate';

const drawNotes = (
  generatedStickings: { [key: string]: string },
  beatName: string
): StaveNote[] => {
  const value = generatedStickings[beatName];

  if (value.length === 2) {
    return [
      new StaveNote({
        keys: ['A/4'],
        duration: '8',
      }).addModifier(annotate(value[0])),
      new StaveNote({
        keys: ['A/4'],
        duration: '8',
      }).addModifier(annotate(value[1])),
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

export default drawNotes;
