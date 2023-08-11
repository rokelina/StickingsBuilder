import { useRef } from 'react';
// import { RenderContext, Stave, Formatter, Tuplet } from 'vexflow';
// import drawStaff from '../../../lib/utils/staffUtils/drawStaff';
import drawTripletNotes from '../../../lib/utils/staffUtils/drawTriplets';
import '../Staff.css';
import { useDrawNotes } from '../../../hooks/useDrawNotes';

interface Props {
  selectedStickings: { [key: string]: string };
}

function TripletsStaff({ selectedStickings }: Props) {
  const notesDivRef = useRef<HTMLDivElement | null>(null);

  useDrawNotes(selectedStickings, drawTripletNotes, notesDivRef);

  // useEffect(() => {
  //   const notesGraph = notesGraphRef.current;
  //   const [vexContext, vexStave] = drawStaff(notesGraph as HTMLDivElement);

  //   const notes1 = drawTripletNotes(selectedStickings, 'beat-1');
  //   const notes2 = drawTripletNotes(selectedStickings, 'beat-2');
  //   const notes3 = drawTripletNotes(selectedStickings, 'beat-3');
  //   const notes4 = drawTripletNotes(selectedStickings, 'beat-4');
  //   const allNotes = [...notes1, ...notes2, ...notes3, ...notes4];

  //   const tuplets = [
  //     new Tuplet(notes1),
  //     new Tuplet(notes2),
  //     new Tuplet(notes3),
  //     new Tuplet(notes4),
  //   ];

  //   Formatter.FormatAndDraw(
  //     vexContext as RenderContext,
  //     vexStave as Stave,
  //     allNotes,
  //     { auto_beam: true }
  //   );

  //   tuplets.forEach((t) => t.setContext(vexContext as RenderContext).draw());

  //   const cleanup = () => {
  //     while (notesGraph?.firstChild) {
  //       notesGraph.removeChild(notesGraph.firstChild);
  //     }
  //   };
  //   return cleanup;
  // }, [selectedStickings]);

  return <div className="staff-container" ref={notesDivRef}></div>;
}

export default TripletsStaff;
