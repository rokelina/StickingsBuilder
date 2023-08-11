import { useRef } from 'react';
import { useDrawNotes } from '../../hooks/useDrawNotes';
import drawRandomNotes from '../../lib/utils/randomModeUtils/drawRandomNotes';
import '../Staff/Staff.css';

interface Props {
  generatedStickings: { [key: string]: string };
}

function RandomStaff({ generatedStickings }: Props) {
  const notesDivRef = useRef<HTMLDivElement | null>(null);

  useDrawNotes(generatedStickings, drawRandomNotes, notesDivRef);

  return <div className="staff-container" ref={notesDivRef}></div>;
}

export default RandomStaff;
