interface Props {
  wrapperName: string;
  inputName: string;
  spanName: string;
  count?: number;
}

function NumberInput({ wrapperName, inputName, spanName, count }: Props) {
  return (
    <div className={wrapperName}>
      <input type="number" className={inputName} value={count} />
      <span className={inputName}>{spanName}</span>
    </div>
  );
}

export default NumberInput;
