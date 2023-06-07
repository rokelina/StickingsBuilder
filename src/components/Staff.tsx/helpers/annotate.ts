import { Vex } from 'vexflow';

function annotate(hand: string) {
  const { Annotation } = Vex.Flow;
  return new Annotation(hand)
    .setVerticalJustification(Annotation.VerticalJustify.BOTTOM)
    .setFont('Arial', 14, 'bold');
}

export default annotate;
