import { useEffect, useRef } from 'react';
import { RenderContext, Stave, Vex } from 'vexflow';
import drawStaff from './helpers/drawStaff';
function TripletsStaff() {
  const notesGraphRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!notesGraphRef.current?.hasChildNodes()) {
      const { StaveNote, Beam, Formatter, Tuplet } = Vex.Flow;
      const [vexContext, vexStave] = drawStaff(
        notesGraphRef.current as HTMLDivElement
      );

      //   let notes1;
      //   let notes2;
      //   let notes3;
      //   let notes4;

      const notes1 = [
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
      const notes2 = [
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
      const notes3 = [
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
      const notes4 = [
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
      const allNotes = notes1.concat(notes2).concat(notes3).concat(notes4);

      // This hides the normal stems and flags.
      const beams = [
        new Beam(notes1),
        new Beam(notes2),
        new Beam(notes3),
        new Beam(notes4),
      ];

      const tuplets = [
        new Tuplet(notes1),
        new Tuplet(notes2),
        new Tuplet(notes3),
        new Tuplet(notes4),
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

      tuplets.forEach((t) => t.setContext(vexContext as RenderContext).draw());
    }
  }, []);

  return (
    <div className="notes-container">
      <div className="notes-graph" ref={notesGraphRef}></div>
    </div>
  );
}
export default TripletsStaff;
