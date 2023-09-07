import { NotesArray } from '../../../hooks/useDrawNotes';

function* beatGenerator(beatArray: NotesArray[]): Generator<NotesArray> {
  let index = 0;
  while (true) {
    yield beatArray[index];
    index = (index + 1) % beatArray.length;
  }
}

export default beatGenerator;
