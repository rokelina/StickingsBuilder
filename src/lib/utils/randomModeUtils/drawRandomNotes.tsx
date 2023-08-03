import { StaveNote } from 'vexflow';
import annotate from '../staffUtils/annotate';

const drawRandomNotes = (
  stickings: { [key: string]: string },
  beatName: string
): StaveNote[] => {
  const value = stickings[beatName];
  const output: StaveNote[] = [];

  //  value.length = subdivision
  for (let i = 0; i < value.length; i++) {
    output.push(
      new StaveNote({
        keys: ['A/4'],
        duration: value.length < 4 ? '8' : '16',
      }).addModifier(annotate(value[i]))
    );
  }
  return output;
};

export default drawRandomNotes;
