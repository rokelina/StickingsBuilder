import {
  Beam,
  Formatter,
  RenderContext,
  Stave,
  StaveNote,
  Tuplet,
} from 'vexflow';
import drawEmptyStaff from './drawEmptyStaff';

function drawStaffAndNotes(
  divRef: HTMLDivElement,
  allNotes: StaveNote[],
  beams: Beam[],
  tuplets: Tuplet[]
) {
  const [vexContext, vexStave] = drawEmptyStaff(divRef as HTMLDivElement);

  Formatter.FormatAndDraw(
    vexContext as RenderContext,
    vexStave as Stave,
    allNotes
  );

  beams.forEach((b) => b.setContext(vexContext as RenderContext).draw());

  if (tuplets.length) {
    tuplets.forEach((t) => t.setContext(vexContext as RenderContext).draw());
  }
}

export default drawStaffAndNotes;
