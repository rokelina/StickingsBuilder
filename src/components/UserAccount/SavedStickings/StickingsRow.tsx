interface Props {
  sticking: { [key: string]: string };
  onDelete: (id: string) => void;
}
const StickingsRow = ({ sticking, onDelete }: Props) => {
  return (
    <div>
      {JSON.stringify(sticking.sticking)}
      {Object.values(sticking.sticking).toString()}
      <button
        onClick={() => {
          onDelete(sticking.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default StickingsRow;
