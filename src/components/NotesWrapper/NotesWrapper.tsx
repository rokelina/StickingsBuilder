import { ReactNode } from 'react';

interface WrapperProps {
  displayMenu: string;
  divClassName: string;
  onEighthNotes: ReactNode;
  onTripletNotes: ReactNode;
  onRandomNotes: ReactNode;
}

function NotesWrapper({
  displayMenu,
  divClassName,
  onEighthNotes,
  onTripletNotes,
  onRandomNotes,
}: WrapperProps) {
  return (
    <div className={divClassName}>
      {displayMenu === 'eighth-notes' && onEighthNotes}
      {displayMenu === 'triplet-notes' && onTripletNotes}
      {displayMenu === 'random-stickings' && onRandomNotes}
    </div>
  );
}

export default NotesWrapper;
