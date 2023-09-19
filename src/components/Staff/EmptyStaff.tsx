import { useEffect, useRef } from 'react';
import drawEmptyStaff from '../../lib/utils/staffUtils/drawEmptyStaff';
import './Staff.css';

function EmptyStaff() {
  const notesDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const notesDiv = notesDivRef.current;
    drawEmptyStaff(notesDiv as HTMLDivElement);

    return () => {
      while (notesDiv?.firstChild) {
        notesDiv.removeChild(notesDiv.firstChild);
      }
    };
  }, []);

  return <div className="staff-container" ref={notesDivRef}></div>;
}

export default EmptyStaff;
