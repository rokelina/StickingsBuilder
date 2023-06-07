import { useEffect, useRef } from 'react';
import './Staff.css';
import { Vex } from 'vexflow';
function EighthNoteStaff() {
  const notesGraphRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!notesGraphRef.current?.hasChildNodes()) {
      const { Renderer, Stave, StaveNote, Beam, Formatter } = Vex.Flow;

      const renderer = new Renderer(
        notesGraphRef.current as HTMLDivElement,
        Renderer.Backends.SVG
      );
      renderer.resize(650, 200);
      const context = renderer.getContext();
      context.setFont('Arial', 10);

      const stave = new Stave(25, 40, 600);

      stave.addClef('percussion').addTimeSignature('4/4');
      // Render the stave
      stave.setContext(context).draw();

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

      Formatter.FormatAndDraw(context, stave, allNotes);

      // Draw the beams and stems.
      beams.forEach((b) => {
        b.setContext(context).draw();
      });
    }
  }, []);

  return (
    <div className="notes-container">
      <div className="notes-graph" ref={notesGraphRef}></div>
    </div>
  );
}

export default EighthNoteStaff;
