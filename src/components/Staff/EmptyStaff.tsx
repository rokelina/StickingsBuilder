import { useEffect, useRef } from 'react';
import { useResizeStaff } from '../../hooks/useResizeStaff';
import drawEmptyStaff from '../../lib/utils/staffUtils/drawEmptyStaff';
import './Staff.css';

function EmptyStaff() {
  const notesDivRef = useRef<HTMLDivElement | null>(null);
  const staffSize = useResizeStaff();
  useEffect(() => {
    const notesDiv = notesDivRef.current;
    drawEmptyStaff(notesDiv as HTMLDivElement, staffSize);

    return () => {
      while (notesDiv?.firstChild) {
        notesDiv.removeChild(notesDiv.firstChild);
      }
    };
  }, [staffSize]);

  return <div className="staff-container" ref={notesDivRef}></div>;
}

export default EmptyStaff;
