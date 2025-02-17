import InteractionContainer from "../interaction/InteractionContainer";
import ContactTable from "../contacTable/ContactTable";
import {ALPHABET_A_M, ALPHABET_N_Z} from "../../alphabet/Alphabet";
import './Main.css';

export default function Main() {
  return (
    <main className="main">
      <InteractionContainer />
      <ContactTable alphabetLeft={ALPHABET_A_M} alphabetRight={ALPHABET_N_Z} />
    </main>
  )
}
