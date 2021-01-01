import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import CreateGrid from './components/CreateGrid/CreateGrid';

function App() {
  const [pointsO, setPointsO] = useState(0); // Punkte von O (AI)
  const [pointsX, setPointsX] = useState(0); // Punkte von X (Benutzer)
  const [spieler, setSpieler] = useState('O'); // X, O; Benutzer ist X am Anfang
  const [gefuellt, setGefuellt] = useState([[], []]); // arr der gefuellten Zellen; 1. arr: X, 2. arr: O
  const [gestartet, setGestartet] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const showResult = () => { // update result

  }

  const pruefe3 = () => {
    // order the 2 array gefuellt
    const arrayX = gefuellt[0].sort((a, b) => a - b);
    const arrayO = gefuellt[1].sort((a,b) => a - b);
    // horizontal: 1,2,3; 4,5,6; 7,8,9;
    const horizontal = [[1,2,3], [4,5,6], [7,8,9]];

    // vertikal: 1,4,7; 2,5,8; 3,6,9;
    const vertikal = [[1,4,7], [2,5,8], [3,6,9]];

    // diagonal: 1,5,9; 3,5,7;
    const diagonal = [[1,5,9], [3,5,7]];
  }

  const gewonnen = () => { // zeige Gewonnen-Banner
    // TODO update Punktestand
  }

  const verloren = () => { // zeige Verloren-Banner
    // TODO update Punktestand
  }

  const aendereSpieler = () => {
    if(spieler === 'X') setSpieler('O');
    else setSpieler('X');
    console.log('a: ', spieler)
  }

  const waehleZeichen = () => {
    setDisabled(true);
    console.log(gestartet)
  }

  useEffect( () => {
    setGestartet(true);
    console.log(gestartet)
    console.log('geändert')
  }, []);


  return (
    <>
    <section className="container">
      <article className="content">
        <h1>Tik Tak Toe Spiel 2.0</h1>
        <section className="result">
          <article className="pointsO-container">
            <p><span>Punkte von O: </span>{pointsO}</p>
          </article>
          <article className="pointsX-container">
            <p><span>Punkte von X: </span>{pointsX}</p>
          </article>
          <article className="choisePlayer">
            <select className="player" disabled={disabled} onChange={ (e) => setSpieler(e.target.value)}>
              <option>O</option>
              <option>X</option>
            </select>
          </article>
          <article className="buttonContainer">
          {/* button */}
            <button type="button" onClick={() => {
            waehleZeichen()}}
            disabled={disabled}
            >Spielen</button>
          </article>
        </section>
        <section className="grid-container">
          <article className="grid-content">
            <div className="grid">
              {/* Gitter */}
              <ul className="zellen">
                <CreateGrid
                  gefuellt={gefuellt}
                  setGefuellt={setGefuellt}
                  gestartet={gestartet}
                  spieler={spieler}
                  disabled={disabled}
                  setDisabled={setDisabled} />
              </ul>
            </div>
          </article>
        </section>
      </article>
    </section>

    </>
  );
}

export default App;
