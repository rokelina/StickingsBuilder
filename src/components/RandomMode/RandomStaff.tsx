import { useEffect, useRef } from 'react';
import { RenderContext, Stave, Beam, Tuplet, Formatter } from 'vexflow';
import drawStaff from '../Staff/utils/drawStaff';

interface Props {
  generatedStickings: { [key: string]: string };
}

function RandomStaff({ generatedStickings }: Props) {
  const notesGraphRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const notesGraph = notesGraphRef.current;

    while (notesGraph?.firstChild) {
      notesGraph.removeChild(notesGraph.firstChild);
    }

    const [vexContext, vexStave] = drawStaff(notesGraph as HTMLDivElement);

    // const notes1 = drawEighthNotes(generatedStickings, 'beat-1');
    // const notes2 = drawEighthNotes(generatedStickings, 'beat-2');
    // const notes3 = drawEighthNotes(generatedStickings, 'beat-3');
    // const notes4 = drawEighthNotes(generatedStickings, 'beat-4');
    // const allNotes = notes1.concat(notes2).concat(notes3).concat(notes4);

    // // This hides the normal stems and flags.
    // const beams = [
    //   new Beam(notes1),
    //   new Beam(notes2),
    //   new Beam(notes3),
    //   new Beam(notes4),
    // ];

    // Formatter.FormatAndDraw(
    //   vexContext as RenderContext,
    //   vexStave as Stave,
    //   allNotes
    // );

    // // Draw the beams and stems.
    // beams.forEach((b) => {
    //   b.setContext(vexContext as RenderContext).draw();
    // });
  }, [generatedStickings]);

  return <div className="staff-container" ref={notesGraphRef}></div>;
}

export default RandomStaff;
