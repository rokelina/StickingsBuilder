import { useEffect, useRef } from 'react';
import { RenderContext, Stave, Formatter } from 'vexflow';
import drawStaff from '../../../lib/utils/staffUtils/drawStaff';
import drawEighthNotes from '../../../lib/utils/staffUtils/drawEighthNotes';
import '../Staff.css';

interface Props {
  selectedStickings: { [key: string]: string };
}

function EighthNoteStaff({ selectedStickings }: Props) {
  const notesGraphRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const notesGraph = notesGraphRef.current;

    const [vexContext, vexStave] = drawStaff(notesGraph as HTMLDivElement);

    const notes1 = drawEighthNotes(selectedStickings, 'beat-1');
    const notes2 = drawEighthNotes(selectedStickings, 'beat-2');
    const notes3 = drawEighthNotes(selectedStickings, 'beat-3');
    const notes4 = drawEighthNotes(selectedStickings, 'beat-4');
    const allNotes = [...notes1, ...notes2, ...notes3, ...notes4];

    Formatter.FormatAndDraw(
      vexContext as RenderContext,
      vexStave as Stave,
      allNotes,
      { auto_beam: true }
    );

    const cleanup = () => {
      while (notesGraph?.firstChild) {
        notesGraph.removeChild(notesGraph.firstChild);
      }
    };
    return cleanup;
  }, [selectedStickings]);

  return <div className="staff-container" ref={notesGraphRef}></div>;
}

export default EighthNoteStaff;
