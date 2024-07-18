import { FaRegTrashAlt } from 'react-icons/fa';
import Button from '../../Button/Button';
interface Props {
  sticking: { [key: string]: string };
  onDelete: (id: string) => void;
}
const StickingsRow = ({ sticking, onDelete }: Props) => {
  const stickingValue: { [key: string]: string } = Object(sticking.sticking);
  const stickingText = `${stickingValue['beat-1']} - ${stickingValue['beat-2']} - ${stickingValue['beat-3']} - ${stickingValue['beat-4']} `;
  return (
    <li style={{ padding: '0.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ flex: '1' }}>{stickingText}</span>
        <Button
          idName="delete-sticking-btn"
          children={<FaRegTrashAlt />}
          onBtnClick={() => onDelete(sticking.id)}
        />
        {/* <button
          onClick={() => {
            onDelete(sticking.id);
          }}
        >
          <FaRegTrashAlt />
        </button> */}
      </div>
    </li>
  );
};
export default StickingsRow;
