import { Vex } from "vexflow";

function randomAnnotate() {
    const { Annotation } = Vex.Flow;
  
    let hand;
    if (Math.random() < 0.5) {
      hand = 'R';
    } else {
      hand = 'L';
    }
    return new Annotation(hand)
      .setVerticalJustification(Annotation.VerticalJustify.BOTTOM)
      .setFont('Arial', 14, 'bold');
  }
  
  export default randomAnnotate