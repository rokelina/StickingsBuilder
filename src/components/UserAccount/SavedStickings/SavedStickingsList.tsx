import { DocumentData } from 'firebase/firestore';
import StickingsRow from './StickingsRow';

interface Props {
  savedStickings: DocumentData[] | undefined;
  deleteId: string;
  onDelete: (id: string) => void;
}
const SavedStickingsList = ({ savedStickings, deleteId, onDelete }: Props) => {
  return (
    <ul className="stickings-list">
      {savedStickings?.length ? (
        savedStickings.map(
          (sticking) =>
            sticking.id !== deleteId && (
              <StickingsRow
                key={sticking.id}
                sticking={sticking}
                onDelete={onDelete}
              />
            )
        )
      ) : (
        <div>You haven't saved any stickings yet!</div>
      )}
    </ul>
  );
};
export default SavedStickingsList;
