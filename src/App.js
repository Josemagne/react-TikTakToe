import './App.css';
import React, {useState, useEffect} from 'react';
import CreateGrid from './components/CreateGrid/CreateGrid';

function App() {
  const [pointsO, setPointsO] = useState(0); // Punkte von O (AI)
  const [pointsX, setPointsX] = useState(0); // Punkte von X (Benutzer)
  const [spieler, setSpieler] = useState('X'); // X, O; Benutzer ist X am Anfang
  const [gefuellt, setGefuellt] = useState([[], []]); // arr der gefuellten Zellen; 1. arr: X, 2. arr: O
  const [grid, setGrid] = useState();

  const setzeZeichen = (i) => {
    // add number to array of actual position
    for (let j = 1; j <= 9; j++) {
      if ( j === i ) {
        if (spieler === 'X') {
          setGefuellt(gefuellt[0].push(i));
        } else {
          setGefuellt(gefuellt[1].push(i));
        }
      }
    }
    updateGrid(i);


    // pruefe ob Linie mit 3 Zeichen besteht
    pruefe3();
  }

  const updateGrid = (i) => {
    let newGrid = [];
    // die bereits geklickten Zellen haben kein eventListener mehr
    for (let j = 1; j <= 9; j++) {
      if (gefuellt[0].includes(j)) {    // fuelle X
        newGrid.push(<li className="zelle" key={j}>X</li>);
        console.log(1)
      } else if (gefuellt[1].includes(j)) {     // fuelle O
        newGrid.push(<li className="zelle" key={j}>O</li>);
        console.log(2)
      } else if (j === i) {
        newGrid.push(<li className="zelle" key={j}>{spieler}</li>);
        console.log(3)
      } else { // if neither is included or was clicked on
        newGrid.push(<li className="zelle" key={j} // leere Zelle
      onClick={ () => setzeZeichen(j)}></li>);
      console.log(4)
      }
    }
    setGrid(newGrid);
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
    console.log('a: ', spieler)
  }

  useEffect( () => {
    aendereSpieler();
    console.log(spieler)
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
            <select className="player">
              <option>O</option>
              <option>X</option>
            </select>
          </article>
        </section>
        <section className="grid-container">
          <article className="grid-content">
            <div className="grid">
              <ul className="zellen">
                {grid ? grid : <CreateGrid
                  setzeZeichen={setzeZeichen} />
                  }
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
