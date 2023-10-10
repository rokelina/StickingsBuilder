import { Vex } from 'vexflow';

function drawEmptyStaff(divRef: HTMLDivElement) {
  const { Renderer, Stave } = Vex.Flow;

  const renderer = new Renderer(divRef, Renderer.Backends.SVG);
  renderer.resize(750, 200);
  const context = renderer.getContext();

  const stave = new Stave(25, 40, 700);

  stave.addClef('percussion').addTimeSignature('4/4');
  // Render the stave
  stave.setContext(context).draw();

  return [context, stave];
}

export default drawEmptyStaff;
