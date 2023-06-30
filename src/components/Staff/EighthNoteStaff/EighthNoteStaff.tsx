import { useEffect, useRef } from 'react';
import { RenderContext, Stave, Beam, Formatter } from 'vexflow';
import drawStaff from '../utils/drawStaff';
import drawEighthNotes from '../utils/drawEighthNotes';

interface Props {
  selectedStickings: { [key: string]: string };
}

function EighthNoteStaff({ selectedStickings }: Props) {
  const notesGraphRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const notesGraph = notesGraphRef.current;

    while (notesGraph?.firstChild) {
      notesGraph.removeChild(notesGraph.firstChild);
    }

    const [vexContext, vexStave] = drawStaff(notesGraph as HTMLDivElement);

    const notes1 = drawEighthNotes(selectedStickings, 'beat-1');
    const notes2 = drawEighthNotes(selectedStickings, 'beat-2');
    const notes3 = drawEighthNotes(selectedStickings, 'beat-3');
    const notes4 = drawEighthNotes(selectedStickings, 'beat-4');
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
  }, [selectedStickings]);

  return <div className="notes-graph" ref={notesGraphRef}></div>;
}

export default EighthNoteStaff;
