import { useRef } from 'react';
import { NotesArray } from '../../hooks/useDrawNotes';
import { useDrawNotes } from '../../hooks/useDrawNotes';
import './Staff.css';

interface Props {
  stickings: { [key: string]: string };
  drawNotesFunction: (
    stickingsObject: { [key: string]: string },
    beatName: string
  ) => NotesArray;
}

function Staff({ stickings, drawNotesFunction }: Props) {
  const notesDivRef = useRef<HTMLDivElement | null>(null);

  useDrawNotes(stickings, drawNotesFunction, notesDivRef);

  return <div className="staff-container" ref={notesDivRef}></div>;
}

export default Staff;
