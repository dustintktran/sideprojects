import React, { useState } from 'react'

const TicTacToe = () => {

  const [turn, changeTurn] = useState('X');
  const [board, changeBoard] = useState([
    ['X','_','_'],
    ['_','_','_'],
    ['_','_','O']
  ])
  
  return (
    <div className="tic-tac-toe">
      <h1>Hello world</h1>
      <div>{board[0]}</div>
      <div>{board[1]}</div>
      <div>{board[2]}</div>
    </div>
  );
}

export default TicTacToe;
