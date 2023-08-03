import { useEffect, useRef } from 'react';
import { RenderContext, Stave, Tuplet, Beam, Formatter } from 'vexflow';
import drawStaff from '../../lib/utils/staffUtils/drawStaff';
import drawRandomNotes from '../../lib/utils/randomModeUtils/drawRandomNotes';
import '../Staff/Staff.css';
interface Props {
  generatedStickings: { [key: string]: string };
}

function RandomStaff({ generatedStickings }: Props) {
  const notesGraphRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const notesGraph = notesGraphRef.current;
    const [vexContext, vexStave] = drawStaff(notesGraph as HTMLDivElement);

    const notes1 = drawRandomNotes(generatedStickings, 'beat-1');
    const notes2 = drawRandomNotes(generatedStickings, 'beat-2');
    const notes3 = drawRandomNotes(generatedStickings, 'beat-3');
    const notes4 = drawRandomNotes(generatedStickings, 'beat-4');
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
      while (notesGraph?.firstChild) {
        notesGraph.removeChild(notesGraph.firstChild);
      }
    };
    return cleanup;
  }, [generatedStickings]);

  return <div className="staff-container" ref={notesGraphRef}></div>;
}

export default RandomStaff;
