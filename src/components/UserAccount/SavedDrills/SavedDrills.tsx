// import { DocumentData } from 'firebase/firestore';
// import StickingsRow from './StickingsRow';

// interface Props {
//   savedStickings: DocumentData[] | undefined;
//   deleteId: string;
//   onDelete: (id: string) => void;
// }
const SavedDrillsList = () => {
  return (
    <ul className="stickings-list">
      <div>You haven't saved any drills yet!</div>
    </ul>
  );
};
export default SavedDrillsList;
