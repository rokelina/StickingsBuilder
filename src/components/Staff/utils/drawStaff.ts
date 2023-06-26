import { Vex } from "vexflow";

function drawStaff(graphRef:HTMLDivElement) {
    const { Renderer, Stave } = Vex.Flow;

    const renderer = new Renderer(graphRef, Renderer.Backends.SVG);
    renderer.resize(650, 200);
    const context = renderer.getContext();
    context.setFont('Arial', 10);
  
    const stave = new Stave(25, 40, 600);
  
    stave.addClef('percussion').addTimeSignature('4/4');
    // Render the stave
    stave.setContext(context).draw();
  
    return [context, stave];
}

  export default drawStaff