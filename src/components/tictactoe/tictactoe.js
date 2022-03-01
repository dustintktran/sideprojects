import React, { useState } from 'react'
import Block from '../tictacblock/tictacblock.js';
import './tictactoe.css';

const TicTacToe = () => {

  const [turn, changeTurn] = useState('X');
  const [board, changeBoard] = useState(['','','','','','','','',''])

  const handleCheckWin = () => {
    let currVar = board[0];
    if(board[0] == board[3] && board[3] == board[6] && board[0] !== '') {
      console.log('you win betchesss')
    }
    if(board[1] == board[4] && board[4] == board[7] && board[1] !== '') {
      console.log('you win betchesss')
    }
    if(board[2] == board[5] && board[5] == board[8] && board[2] !== '') {
      console.log('you win betchesss')
    }
    if (board[0] == board[1] && board[0] == board[2] && board[0] !== '') {
      console.log('you win betchesss')
    }
    
    if (board[3] == board[4] && board[3] == board[5] && board[3] !== '') {
      console.log('you win betchesss')
    }
    
    if (board[6] == board[7] && board[6] == board[8] && board[0] !== '') {
      console.log('you win betchesss')
    }

    if (board[0] !=='' && board[0] == board[4] && board[0] == board[8]) {
      console.log('you win betchesss')
    }

    if (board[2] !== '' && board[0] == board[4] && board[0] == board[6]) {
      console.log('you win betchesss')
    }
    
  }
  
  const handleChangeTurn = () => {
    if(turn == 'X') {
      changeTurn('O');
    } else {
      changeTurn('X');
    }
    handleCheckWin();
  }

  const handleClick = (blockIndex) => {
    let newBoard = board;
    newBoard[blockIndex] = turn;
    changeBoard(newBoard);
    handleChangeTurn();
  }

  const handleReset = () => {
    changeBoard(['','','','','','','','','']);
    changeTurn('X');
  }

  return (
    <div>
      Turn: {turn}
      <button onClick={handleReset}>Reset</button>
      <div className="tic-tac-toe-outer">
      {
        board.map((item, index) => {
          return (
            <div>
              <Block index={index} handleClick={handleClick} state={board[index]}/>
            </div>
          )
        })
      }
      </div>
    </div>
  );
}

export default TicTacToe;

/*
TicTacToe Tasks:
tictactoe board  (image or text? grid?)
individual X or O input (component?)
functions to fill board
turns
*/