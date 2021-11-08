import { useState, useRef, useEffect } from 'react';
import music from '../../assets/avengers.mp3';
import './mus.scss';
import useSpeechToText from 'react-hook-speech-to-text';
import capitan from '../../assets/capitan.png';
export default function Mus() {
  //qwerty para hacer uso correcto de esto, habría que usar el state porque sin él,
  //de momento no hay manera de parar la música o cualquier otro evento
  const [state, setState] = useState('');
  const refName = useRef();
  let iniciativa = new Audio(music);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });
  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;
  //qwerty es posible que estos dos funcionen mejor con setstates o con results.transcript o (results.at(-1)).transcript
  // la idea sería que utilizasemos la llamada de api  getCharactersByName(string) y dentro le pasamos lo que se diga
  //alternativamente, un checkbox o similar para poder buscar por series o por personajes
  //se puede encontrar la info aquí https://github.com/Riley-Brown/react-speech-to-text
  let gerard = <></>;
  if (interimResult === 'iniciativa') {
    iniciativa.play();
  }
  if (interimResult === 'gerard') {
    gerard = (
      <img className="capitanGerard" src={capitan} alt="capitan gerard" />
    );
  }
  if (interimResult === 'descansen') {
    iniciativa.pause();
  }
  const template = (
    <>
      <div className="speech-box">
        <button
          className="speech-box__btn"
          onClick={isRecording ? stopSpeechToText : startSpeechToText}
        >
          {isRecording ? '🛑' : '🎙️'}
        </button>
        {interimResult && <p className="speech__result">{interimResult}</p>}
      </div>
      {gerard}
    </>
  );
  return template;
}
