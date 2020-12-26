import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [pointsO, setPointsO] = useState(0); // Punkte von O (AI)
  const [pointsX, setPointsX] = useState(0); // Punkte von X (Benutzer)
  const [spieler, setSpieler] = useState('X'); // X, O; Benutzer ist X am Anfang
  const [gefuellt, setGefuellt] = useState([[], []]); // arr der gefuellten Zellen; 1. arr: X, 2. arr: O
  const [grid, setGrid] = useState();


  const zelle = () => { // erstellt eine Zelle
    
  }

  const CreateGrid = () => {
    const gridArray = [];
    for (let i = 1; i <= 9; i++) {
      gridArray.push(<li className="zelle" key={i}
        onClick={ () => setzeZeichen(i)}></li>);
    }
    return gridArray;
  }

  const setzeZeichen = (i) => {
    // fuege Zeichen (spieler) in die Zelle (i)
    let newGrid = [];

    // die bereits geklickten Zellen haben kein eventListener mehr
    for (let j = 1; j <= 9; j++) {
      if (gefuellt[0].includes(j)) {    // fuelle X
        newGrid.push(<li className="zelle" key={j}>X</li>);
      } else if (gefuellt[1].includes(j)) {     // fuelle O
        newGrid.push(<li className="zelle" key={j}>O</li>);
      } else if (j === i) {
        newGrid.push(<li className="zelle" key={j}>{spieler}</li>);
      } else { // if neither is included or was clicked on
        newGrid.push(<li className="zelle" key={j} // leere Zelle
      onClick={ () => setzeZeichen(j)}></li>);
      }
    }

    setGrid(newGrid);
    // merke dir die gefuellten Zellen --> gefuellt
    if (spieler === 'X') {
      setGefuellt(gefuellt[0].push(i));
    } else {
      setGefuellt(gefuellt[1].push(i));
    }

    // aendere Spieler Zeichen

    // pruefe ob Linie mit 3 Zeichen besteht
  }

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

  }

  const verloren = () => { // zeige Verloren-Banner

  }

  const aendereSpieler = () => {
    if(spieler === 'X') setSpieler('O');
    else setSpieler('X');
    console.log('executed')
  }

  return (
    <>
    <section className="container">
      <article className="content">
        <h1>Tik Tak Toe Spiel</h1>
        <section className="result">
          <article className="pointsO-container">
            <p><span>Punkte von O: </span>{pointsO}</p>
          </article>
          <article className="pointsX-container">
            <p><span>Punkte von X: </span>{pointsX}</p>
          </article>
        </section>
        <section className="grid-container">
          <article className="grid-content">
            <div className="grid">
              <ul className="zellen">
                {grid ? grid : <CreateGrid />}
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
