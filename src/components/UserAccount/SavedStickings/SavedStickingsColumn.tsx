import { DocumentData } from 'firebase/firestore';
import StickingsRow from './StickingsRow';

interface Props {
  savedStickings: DocumentData[] | undefined;
  deleteId: string;
  onDelete: (id: string) => void;
}
const SavedStickingsColumn = ({
  savedStickings,
  deleteId,
  onDelete,
}: Props) => {
  return (
    <div>
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
    </div>
  );
};
export default SavedStickingsColumn;
