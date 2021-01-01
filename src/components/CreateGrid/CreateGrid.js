import React, {useState} from 'react';

const CreateGrid = ({gefuellt, setGefuellt, gestartet, setGestartet, spieler, disabled}) => {

  const [grid, setGrid] = useState([<li className="zelle" key={1} id="1" onClick={ (e) => updateGrid(e.target.id)}></li>,
<li className="zelle" key={2} id="2" onClick={ (e) => updateGrid(e.target.id)}></li>,
<li className="zelle" key={3} id="3" onClick={ (e) => updateGrid(e.target.id)}></li>,
<li className="zelle" key={4} id="4" onClick={ (e) => updateGrid(e.target.id)}></li>,
<li className="zelle" key={5} id="5" onClick={ (e) => updateGrid(e.target.id)}></li>,
<li className="zelle" key={6} id="6" onClick={ (e) => updateGrid(e.target.id)}></li>,
<li className="zelle" key={7} id="7" onClick={ (e) => updateGrid(e.target.id)}></li>,
<li className="zelle" key={8} id="8" onClick={ (e) => updateGrid(e.target.id)}></li>,
<li className="zelle" key={9} id="9" onClick={ (e) => updateGrid(e.target.id)}></li>
]);
    
  const updateGefuellt = (i) => {
    if (gestartet) {
      // add number to array of actual position
      if (spieler === 'X') {
        setGefuellt(gefuellt[0].push(i));
      } else {
        setGefuellt(gefuellt[1].push(i));
              console.log('yoee')
      }
      // pruefe ob Linie mit 3 Zeichen besteht TODO
      console.log(gefuellt)
    }
    return;
  }

  const updateGrid = (i) => {
    updateGefuellt(i);
          console.log('yo')
          console.log(gestartet)
    if (true) {
      console.log('yoe')
      let newGrid = [];
      // die bereits geklickten Zellen haben kein eventListener mehr
      for (let j = 1; j <= 9; j++) {
        if (gefuellt[0].includes(j)) {    // fuelle X
          newGrid.push(<li className="zelle" id={j} key={j}>X</li>);
        } else if (gefuellt[1].includes(j)) {     // fuelle O
          newGrid.push(<li className="zelle" key={j} id={j}>O</li>);
        } else { // if neither is included or was clicked on
          newGrid.push(<li className="zelle" key={j} id={j} // leere Zelle
        onClick={ () => updateGrid(j)}></li>)
        }
      }
      setGrid(newGrid);
      
    }
  }

  return grid 
};

export default CreateGrid;

