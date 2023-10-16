import { useRef } from 'react';
import { NotesArray, useDrawNotes } from '../../hooks/useDrawNotes';
import { useResizeStaff } from '../../hooks/useResizeStaff';
import './Staff.css';

interface Props {
  stickings: { [key: string]: string };
  getNotesArrayFunction: (
    stickingsObject: { [key: string]: string },
    beatName: string
  ) => NotesArray;
  isPlaying: boolean;
}

function Staff({ stickings, getNotesArrayFunction, isPlaying }: Props) {
  const notesDivRef = useRef<HTMLDivElement | null>(null);
  const beatsPerMeasure = 4;

  const staffSize = useResizeStaff();

  useDrawNotes(
    stickings,
    getNotesArrayFunction,
    notesDivRef,
    staffSize,
    isPlaying,
    beatsPerMeasure
  );

  return <div className="staff-container" ref={notesDivRef}></div>;
}

export default Staff;
