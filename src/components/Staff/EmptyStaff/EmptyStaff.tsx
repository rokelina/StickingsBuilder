import { useEffect, useRef } from 'react';
import drawStaff from '../utils/drawStaff';

function EmptyStaff() {
  const notesGraphRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!notesGraphRef.current?.hasChildNodes()) {
      drawStaff(notesGraphRef.current as HTMLDivElement);
    }
  }, []);

  return <div className="notes-graph" ref={notesGraphRef}></div>;
}

export default EmptyStaff;
