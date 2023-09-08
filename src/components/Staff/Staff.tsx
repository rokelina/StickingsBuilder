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
  isPlaying: boolean;
  addCountdown: boolean;
}

function Staff({
  stickings,
  drawNotesFunction,
  isPlaying,
  addCountdown,
}: Props) {
  const notesDivRef = useRef<HTMLDivElement | null>(null);

  useDrawNotes(
    stickings,
    drawNotesFunction,
    notesDivRef,
    isPlaying,
    addCountdown
  );

  return <div className="staff-container" ref={notesDivRef}></div>;
}

export default Staff;
