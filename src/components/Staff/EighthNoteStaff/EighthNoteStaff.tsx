import { useEffect, useRef } from 'react';
import { RenderContext, Stave, Vex } from 'vexflow';
import annotate from '../utils/annotate';
import drawStaff from '../utils/drawStaff';

function EighthNoteStaff() {
  const notesGraphRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!notesGraphRef.current?.hasChildNodes()) {
      const { StaveNote, Beam, Formatter } = Vex.Flow;
      const [vexContext, vexStave] = drawStaff(
        notesGraphRef.current as HTMLDivElement
      );

      const notes1 = [
        new StaveNote({
          keys: ['A/4'],
          duration: '8',
        }).addModifier(annotate('R')),
        new StaveNote({
          keys: ['A/4'],
          duration: '8',
        }).addModifier(annotate('')),
      ];
      const notes2 = [
        new StaveNote({
          keys: ['A/4'],
          duration: '8',
        }).addModifier(annotate('L')),
        new StaveNote({
          keys: ['A/4'],
          duration: '8',
        }).addModifier(annotate('L')),
      ];
      const notes3 = [
        new StaveNote({
          keys: ['A/4'],
          duration: '8',
        }),
        new StaveNote({
          keys: ['A/4'],
          duration: '8',
        }),
      ];
      const notes4 = [
        new StaveNote({
          keys: ['A/4'],
          duration: '8',
        }),
        new StaveNote({
          keys: ['A/4'],
          duration: '8',
        }),
      ];
      const allNotes = notes1.concat(notes2).concat(notes3).concat(notes4);

      // This hides the normal stems and flags.
      const beams = [
        new Beam(notes1),
        new Beam(notes2),
        new Beam(notes3),
        new Beam(notes4),
      ];

      Formatter.FormatAndDraw(
        vexContext as RenderContext,
        vexStave as Stave,
        allNotes
      );

      // Draw the beams and stems.
      beams.forEach((b) => {
        b.setContext(vexContext as RenderContext).draw();
      });
    }
  }, []);

  return <div className="notes-graph" ref={notesGraphRef}></div>;
}

export default EighthNoteStaff;
