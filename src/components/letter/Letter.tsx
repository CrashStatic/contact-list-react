import './Letter.css';

interface Letter {
  letter: string;
  id: string;
  count: number;
}

export default function Letter({letter, id, count}: Letter) {
  return (
    <div className="letter" tabIndex={0}>
      <div className="letter__container">
        <div className="letter__letter" data-id={id}>{letter}</div>
        <span className="letter__counter">{count}</span>
      </div>
      <div className="letter__contacts" />
    </div>
  )
}
