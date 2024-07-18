import { FaRegTrashAlt } from 'react-icons/fa';
interface Props {
  sticking: { [key: string]: string };
  onDelete: (id: string) => void;
}
const StickingsRow = ({ sticking, onDelete }: Props) => {
  const stickingValue: { [key: string]: string } = Object(sticking.sticking);
  const stickingText = `${stickingValue['beat-1']} - ${stickingValue['beat-2']} - ${stickingValue['beat-3']} - ${stickingValue['beat-4']} `;
  return (
    <div>
      {stickingText}
      <button
        onClick={() => {
          onDelete(sticking.id);
        }}
      >
        <FaRegTrashAlt />
      </button>
    </div>
  );
};
export default StickingsRow;
