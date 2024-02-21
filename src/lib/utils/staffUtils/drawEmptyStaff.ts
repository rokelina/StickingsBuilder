import { Vex } from 'vexflow';
import { StaffSize } from '../../../hooks/useResizeStaff';

function drawEmptyStaff(divRef: HTMLDivElement, staffSize: StaffSize) {
  const { Renderer, Stave } = Vex.Flow;

  const renderer = new Renderer(divRef, Renderer.Backends.SVG);
  renderer.resize(staffSize.divWidth, staffSize.divHeight);
  const context = renderer.getContext();

  if (staffSize.scaleX && staffSize.scaleY) {
    context.scale(staffSize.scaleX, staffSize.scaleY);
  }

  const stave = new Stave(
    staffSize.staffX,
    staffSize.staffY,
    staffSize.staffWidth
  );

  stave.addClef('percussion').addTimeSignature('4/4');
  // Render the stave
  stave.setContext(context).draw();

  return [context, stave];
}

export default drawEmptyStaff;
