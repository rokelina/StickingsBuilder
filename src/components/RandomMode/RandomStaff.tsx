import { useEffect, useRef } from 'react';
import { RenderContext, Stave, Beam, Tuplet, Formatter } from 'vexflow';
import drawStaff from '../../lib/utils/staffUtils/drawStaff';
import drawNotes from '../../lib/utils/randomModeUtils/drawNotes';

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

    const notes1 = drawNotes(generatedStickings, 'beat-1');
    const notes2 = drawNotes(generatedStickings, 'beat-2');
    const notes3 = drawNotes(generatedStickings, 'beat-3');
    const notes4 = drawNotes(generatedStickings, 'beat-4');
    const allNotes = [...notes1, ...notes2, ...notes3, ...notes4];

    const beams = [
      new Beam(notes1),
      new Beam(notes2),
      new Beam(notes3),
      new Beam(notes4),
    ];

    const allBeats = [notes1, notes2, notes3, notes4];
    const tuplets: Tuplet[] = allBeats
      .filter((notesArray) => notesArray.length === 3)
      .map((notesArray) => new Tuplet(notesArray));

    Formatter.FormatAndDraw(
      vexContext as RenderContext,
      vexStave as Stave,
      allNotes
    );

    beams.forEach((b) => {
      b.setContext(vexContext as RenderContext).draw();
    });

    if (tuplets.length) {
      tuplets.forEach((t) => t.setContext(vexContext as RenderContext).draw());
    }
  }, [generatedStickings]);

  return <div className="staff-container" ref={notesGraphRef}></div>;
}

export default RandomStaff;
