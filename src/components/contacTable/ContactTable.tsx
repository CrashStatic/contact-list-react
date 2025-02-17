import '../../index.css';
import './ContactTable.css';
import Letter from "../letter/Letter";

interface LetterProps {
  letter: string;
  id: string;
}

interface ContactTableProps {
  alphabetLeft: LetterProps[];
  alphabetRight: LetterProps[];
}

export default function ContactTable({alphabetLeft, alphabetRight}: ContactTableProps) {
  return (
    <section className="contact-table" aria-live="assertive">
      <h2 className="visually-hidden">Contact table</h2>
      <div className="contact-table__column">
        {alphabetLeft.map((letter) => (
          <Letter key={letter.id} letter={letter.letter} id={letter.id} count={0} />
        ))}
      </div>
      <div className="contact-table__column">
        {alphabetRight.map((letter) => (
          <Letter key={letter.id} letter={letter.letter} id={letter.id} count={0} />
        ))}
      </div>
    </section>
  )
}
