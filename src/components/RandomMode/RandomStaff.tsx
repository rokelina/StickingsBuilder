import { useEffect, useRef } from 'react';
import { RenderContext, Stave, Tuplet, Formatter } from 'vexflow';
import drawStaff from '../../lib/utils/staffUtils/drawStaff';
import drawNotes from '../../lib/utils/randomModeUtils/drawNotes';
import '../Staff/Staff.css';
interface Props {
  generatedStickings: { [key: string]: string };
}

function RandomStaff({ generatedStickings }: Props) {
  const notesGraphRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const notesGraph = notesGraphRef.current;
    const [vexContext, vexStave] = drawStaff(notesGraph as HTMLDivElement);

    const notes1 = drawNotes(generatedStickings, 'beat-1');
    const notes2 = drawNotes(generatedStickings, 'beat-2');
    const notes3 = drawNotes(generatedStickings, 'beat-3');
    const notes4 = drawNotes(generatedStickings, 'beat-4');
    const allNotes = [...notes1, ...notes2, ...notes3, ...notes4];

    const allBeats = [notes1, notes2, notes3, notes4];
    const tuplets: Tuplet[] = allBeats
      .filter((notesArray) => notesArray.length === 3)
      .map((notesArray) => new Tuplet(notesArray));

    Formatter.FormatAndDraw(
      vexContext as RenderContext,
      vexStave as Stave,
      allNotes,
      { auto_beam: true }
    );

    if (tuplets.length) {
      tuplets.forEach((t) => t.setContext(vexContext as RenderContext).draw());
    }

    const cleanup = () => {
      while (notesGraph?.firstChild) {
        notesGraph.removeChild(notesGraph.firstChild);
      }
    };
    return cleanup;
  }, [generatedStickings]);

  return <div className="staff-container" ref={notesGraphRef}></div>;
}

export default RandomStaff;
