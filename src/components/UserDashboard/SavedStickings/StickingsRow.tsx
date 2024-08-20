import { FaRegTrashAlt } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa6';
import { Divider } from '@mui/material';
import Button from '../../Button/Button';
import { useNavigate } from 'react-router';
interface Props {
  sticking: { [key: string]: string };
  onDelete: (id: string) => void;
}
const StickingsRow = ({ sticking, onDelete }: Props) => {
  const navigate = useNavigate();

  const stickingValue: { [key: string]: string } = Object(sticking.sticking);
  const stickingText = `${stickingValue['beat-1']} - ${stickingValue['beat-2']} - ${stickingValue['beat-3']} - ${stickingValue['beat-4']} `;

  return (
    <>
      <li style={{ padding: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ flex: '1', padding: '0.5rem 0rem' }}>
            {stickingText}
          </span>
          <Button
            idName="play-sticking-btn"
            children={<FaPlay />}
            onBtnClick={() =>
              navigate('/user-account/single-sticking', { replace: true })
            }
          />
          <Button
            idName="delete-sticking-btn"
            children={<FaRegTrashAlt />}
            onBtnClick={() => onDelete(sticking.id)}
          />
        </div>
      </li>
      <Divider variant="fullWidth" component="li" />
    </>
  );
};
export default StickingsRow;
