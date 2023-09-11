import { useEffect, MutableRefObject } from 'react';
import {
  RenderContext,
  Stave,
  StaveNote,
  Tuplet,
  Beam,
  Formatter,
} from 'vexflow';
import drawStaff from '../lib/utils/staffUtils/drawStaff';
import { useCurrentBeat } from '../lib/utils/metronomeUtils/useCurrentBeat';

export type NotesArray = StaveNote[];

export function useDrawNotes(
  stickingsObject: { [key: string]: string },
  getNotesArray: (
    stickingsObject: { [key: string]: string },
    beatName: string
  ) => NotesArray,
  divRef: MutableRefObject<HTMLDivElement | null>,
  isPlaying: boolean,
  beatsPerMeasure: number
) {
  const currentBeatIndex = useCurrentBeat(beatsPerMeasure);
  useEffect(() => {
    const notesDiv = divRef.current;

    const notes1 = getNotesArray(stickingsObject, 'beat-1');
    const notes2 = getNotesArray(stickingsObject, 'beat-2');
    const notes3 = getNotesArray(stickingsObject, 'beat-3');
    const notes4 = getNotesArray(stickingsObject, 'beat-4');
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

      //need to check if allBeats.length === beatsPerMeasure

      const [vexContext, vexStave] = drawStaff(notesDiv as HTMLDivElement);

      Formatter.FormatAndDraw(
        vexContext as RenderContext,
        vexStave as Stave,
        allNotes
      );

      beams.forEach((b) => b.setContext(vexContext as RenderContext).draw());

      if (tuplets.length) {
        tuplets.forEach((t) =>
          t.setContext(vexContext as RenderContext).draw()
        );
      }
    } else {
      cleanup();
      const [vexContext, vexStave] = drawStaff(notesDiv as HTMLDivElement);

      Formatter.FormatAndDraw(
        vexContext as RenderContext,
        vexStave as Stave,
        allNotes
      );

      beams.forEach((b) => b.setContext(vexContext as RenderContext).draw());

      if (tuplets.length) {
        tuplets.forEach((t) =>
          t.setContext(vexContext as RenderContext).draw()
        );
      }
    }

    return cleanup;
  }, [stickingsObject, getNotesArray, divRef, isPlaying]);
}
