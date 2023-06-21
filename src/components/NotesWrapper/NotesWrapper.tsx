import { ReactNode } from 'react';

interface WrapperProps {
  displayMenu: string;
  divClassName: string;
  eighthNotes: ReactNode;
  tripletNotes: ReactNode;
  randomNotes: ReactNode;
}

function NotesWrapper({
  displayMenu,
  divClassName,
  eighthNotes,
  tripletNotes,
  randomNotes,
}: WrapperProps) {
  return (
    <div className={divClassName}>
      {displayMenu === 'eighth-notes' && eighthNotes}
      {displayMenu === 'triplet-notes' && tripletNotes}
      {displayMenu === 'random-stickings' && randomNotes}
    </div>
  );
}

export default NotesWrapper;
