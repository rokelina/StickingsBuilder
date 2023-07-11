import { useEffect, useRef } from 'react';
import drawStaff from '../../../lib/utils/staffUtils/drawStaff';

function EmptyStaff() {
  const notesGraphRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!notesGraphRef.current?.hasChildNodes()) {
      drawStaff(notesGraphRef.current as HTMLDivElement);
    }
  }, []);

  return <div className="staff-container" ref={notesGraphRef}></div>;
}

export default EmptyStaff;
