import { useEffect, useRef } from 'react';
import { RenderContext, Stave, Beam, Formatter, Tuplet } from 'vexflow';
import drawStaff from '../../../lib/utils/staffUtils/drawStaff';
import drawTripletNotes from '../../../lib/utils/staffUtils/drawTriplets';

interface Props {
  selectedStickings: { [key: string]: string };
}

function TripletsStaff({ selectedStickings }: Props) {
  const notesGraphRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const notesGraph = notesGraphRef.current;

    while (notesGraph?.firstChild) {
      notesGraph.removeChild(notesGraph.firstChild);
    }

    const [vexContext, vexStave] = drawStaff(notesGraph as HTMLDivElement);

    const notes1 = drawTripletNotes(selectedStickings, 'beat-1');
    const notes2 = drawTripletNotes(selectedStickings, 'beat-2');
    const notes3 = drawTripletNotes(selectedStickings, 'beat-3');
    const notes4 = drawTripletNotes(selectedStickings, 'beat-4');
    const allNotes = [...notes1, ...notes2, ...notes3, ...notes4];

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

    beams.forEach((b) => {
      b.setContext(vexContext as RenderContext).draw();
    });

    tuplets.forEach((t) => t.setContext(vexContext as RenderContext).draw());
  }, [selectedStickings]);

  return <div className="staff-container" ref={notesGraphRef}></div>;
}

export default TripletsStaff;
