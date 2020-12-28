import React, {useState} from 'react';

const CreateGrid = ({setzeZeichen, setGrid}) => {
  const gridArray = [];
  for (let i = 1; i <= 9; i++) {
    gridArray.push(<li className="zelle" key={i}
      onClick={ () => setzeZeichen(i)}></li>);
  }
  return gridArray;
};

export default CreateGrid;