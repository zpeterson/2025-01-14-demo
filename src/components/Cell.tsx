import '../styles/Cell.css';

type CellProps = {
  char: string;
  color: string;
};

export const Cell = ({ char, color }: CellProps) => {
  return <div className={`cell ${color}`}>{char}</div>;
};
