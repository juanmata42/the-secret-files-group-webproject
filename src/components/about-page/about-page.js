import manuCard from '../../assets/manuCard.png';
import juanmaCard from '../../assets/juanmaCard.png';
import gonzaloCard from '../../assets/gonzaloCard.png';
import './about-page.scss';
// qwerty no hay mucho que explicar aquí, solo renderiza cosas sin llamadas. el testing debería ser
// solo de si se renderiza correctamente
export default function AboutPage() {
  const template = (
    <div className="about-page__body">
      <img
        src={manuCard}
        alt="manuCard"
        className="about-page__card manuCard"
      />
      <img
        src={juanmaCard}
        alt="juanmaCard"
        className="about-page__card juanmaCard"
      />
      <img
        src={gonzaloCard}
        alt="gonzaloCard"
        className="about-page__card gonzaloCard"
      />
    </div>
  );
  return template;
}
