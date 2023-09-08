import { Transport } from 'tone';
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
import beatGenerator from '../lib/utils/staffUtils/beatGenerator';

export type NotesArray = StaveNote[];

export function useDrawNotes(
  stickingsObject: { [key: string]: string },
  drawNotesFunction: (
    stickingsObject: { [key: string]: string },
    beatName: string
  ) => NotesArray,
  divRef: MutableRefObject<HTMLDivElement | null>,
  isPlaying: boolean,
  addCountdown: boolean
) {
  useEffect(() => {
    const transportBpm = Transport.bpm.value;
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

    let eventID: number | null = null;

    if (Transport.state === 'started') {
      const beatIter = beatGenerator(allBeats);
      eventID = Transport.scheduleRepeat(() => {
        const nextNotes = beatIter.next().value as NotesArray;
        nextNotes.forEach((note: StaveNote) => {
          note
            .setStyle({
              fillStyle: '#0000ff',
            })
            .setContext(vexContext as RenderContext)
            .draw();
        });

        Transport.scheduleRepeat(
          () => {
            nextNotes.forEach((note: StaveNote) => {
              note
                .setStyle({
                  fillStyle: 'black',
                })
                .setContext(vexContext as RenderContext)
                .draw();
            });
          },
          60 / transportBpm,
          60 / transportBpm
        );
      }, '4n');

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
      if (eventID) {
        Transport.clear(eventID);
      }

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

    const cleanup = () => {
      while (notesDiv?.firstChild) {
        notesDiv.removeChild(notesDiv.firstChild);
      }
    };

    return cleanup;
  }, [stickingsObject, drawNotesFunction, divRef, isPlaying, addCountdown]);
}
