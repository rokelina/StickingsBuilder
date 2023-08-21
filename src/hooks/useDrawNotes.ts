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

export type NotesArray = StaveNote[];

export function useDrawNotes(
  stickingsObject: { [key: string]: string },
  drawNotesFunction: (
    stickingsObject: { [key: string]: string },
    beatName: string
  ) => NotesArray,
  divRef: MutableRefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    const notesDiv = divRef.current;

    const [vexContext, vexStave] = drawStaff(notesDiv as HTMLDivElement);

    const notes1 = drawNotesFunction(stickingsObject, 'beat-1');
    const notes2 = drawNotesFunction(stickingsObject, 'beat-2');
    const notes3 = drawNotesFunction(stickingsObject, 'beat-3');
    const notes4 = drawNotesFunction(stickingsObject, 'beat-4');
    const allNotes = [...notes1, ...notes2, ...notes3, ...notes4];
    const allBeats = [notes1, notes2, notes3, notes4];

    const beams = [
      new Beam(notes1),
      new Beam(notes2),
      new Beam(notes3),
      new Beam(notes4),
    ];

    const tuplets: Tuplet[] = allBeats
      .filter((notesArray) => notesArray.length === 3 || notesArray.length > 4)
      .map((notesArray) => new Tuplet(notesArray, { ratioed: false }));

    Formatter.FormatAndDraw(
      vexContext as RenderContext,
      vexStave as Stave,
      allNotes
    );

    beams.forEach((b) => b.setContext(vexContext as RenderContext).draw());

    if (tuplets.length) {
      tuplets.forEach((t) => t.setContext(vexContext as RenderContext).draw());
    }

    const cleanup = () => {
      while (notesDiv?.firstChild) {
        notesDiv.removeChild(notesDiv.firstChild);
      }
    };

    return cleanup;
  }, [stickingsObject, drawNotesFunction, divRef]);
}
