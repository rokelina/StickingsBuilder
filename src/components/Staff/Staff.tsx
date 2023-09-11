import { useRef } from 'react';
import { NotesArray } from '../../hooks/useDrawNotes';
import { useDrawNotes } from '../../hooks/useDrawNotes';
import './Staff.css';
import { useCurrentBeat } from '../../lib/utils/metronomeUtils/useCurrentBeat';

interface Props {
  stickings: { [key: string]: string };
  drawNotesFunction: (
    stickingsObject: { [key: string]: string },
    beatName: string
  ) => NotesArray;
  isPlaying: boolean;
}

function Staff({ stickings, drawNotesFunction, isPlaying }: Props) {
  // const currentBeat = useCurrentBeat(4, isPlaying);
  const notesDivRef = useRef<HTMLDivElement | null>(null);
  const beatsPerMeasure = 4;

  useDrawNotes(
    stickings,
    drawNotesFunction,
    notesDivRef,
    isPlaying,
    beatsPerMeasure
  );

  return (
    <>
      <div className="staff-container" ref={notesDivRef}></div>
    </>
  );
}

export default Staff;
