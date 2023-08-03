import { Annotation } from 'vexflow';

function annotate(hand: string) {
  return new Annotation(hand)
    .setVerticalJustification(Annotation.VerticalJustify.BOTTOM)
    .setFont('Arial', 16, 'bold');
}

export default annotate;
