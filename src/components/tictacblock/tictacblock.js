import {useState} from 'react';

const Block = (props) => {


  return (
    <div>
      {props.state=='' && <button onClick={() => {props.handleClick(props.index)}}>Le Clicko</button>}
      {props.state}
    </div>
  )

}

export default Block;