import { useEffect, useRef } from 'react';
import drawStaff from '../../lib/utils/staffUtils/drawStaff';
import './Staff.css';

function EmptyStaff() {
  const notesGraphRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const notesGraph = notesGraphRef.current;
    drawStaff(notesGraph as HTMLDivElement);

    return () => {
      while (notesGraph?.firstChild) {
        notesGraph.removeChild(notesGraph.firstChild);
      }
    };
  }, []);

  return <div className="staff-container" ref={notesGraphRef}></div>;
}

export default EmptyStaff;
