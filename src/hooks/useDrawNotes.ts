import { useEffect, MutableRefObject } from 'react';
import { useCurrentBeatIndex } from './useCurrentBeatIndex';
import { StaffSize } from './useResizeStaff';
import { StaveNote, Tuplet, Beam } from 'vexflow';
import drawStaffAndNotes from '../lib/utils/staffUtils/drawStaffAndNotes';

export type NotesArray = StaveNote[];

export function useDrawNotes(
  stickingsObject: { [key: string]: string },
  getNotesArrayFunction: (
    stickingsObject: { [key: string]: string },
    beatName: string
  ) => NotesArray,
  divRef: MutableRefObject<HTMLDivElement | null>,
  staffSize: StaffSize,
  isPlaying: boolean,
  beatsPerMeasure: number
) {
  const currentBeatIndex = useCurrentBeatIndex(beatsPerMeasure);
  useEffect(() => {
    const notesDiv = divRef.current;

    const notes1 = getNotesArrayFunction(stickingsObject, 'beat-1');
    const notes2 = getNotesArrayFunction(stickingsObject, 'beat-2');
    const notes3 = getNotesArrayFunction(stickingsObject, 'beat-3');
    const notes4 = getNotesArrayFunction(stickingsObject, 'beat-4');
    const allBeats = [notes1, notes2, notes3, notes4];
    const allNotes = [...notes1, ...notes2, ...notes3, ...notes4];

    const beams = [
      new Beam(notes1),
      new Beam(notes2),
      new Beam(notes3),
      new Beam(notes4),
    ];

    const tuplets: Tuplet[] = allBeats
      .filter((notesArray) => notesArray.length === 3 || notesArray.length > 4)
      .map((notesArray) => new Tuplet(notesArray, { ratioed: false }));

    const cleanup = () => {
      while (notesDiv?.firstChild) {
        notesDiv.removeChild(notesDiv.firstChild);
      }
    };

    if (isPlaying) {
      cleanup();

      if (allBeats.length === beatsPerMeasure) {
        allBeats[currentBeatIndex].forEach((note: StaveNote) => {
          note.setStyle({
            fillStyle: '#3333ff',
          });
        });
      } else {
        console.log('Error: Incorrect number of beats per measure');
      }

      drawStaffAndNotes(
        notesDiv as HTMLDivElement,
        staffSize,
        allNotes,
        beams,
        tuplets
      );
    } else {
      cleanup();
      drawStaffAndNotes(
        notesDiv as HTMLDivElement,
        staffSize,
        allNotes,
        beams,
        tuplets
      );
    }

    return cleanup;
  }, [
    stickingsObject,
    getNotesArrayFunction,
    divRef,
    staffSize,
    isPlaying,
    currentBeatIndex,
    beatsPerMeasure,
  ]);
}
