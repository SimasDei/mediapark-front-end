import React from 'react';
import { ReactComponent as Arrow } from '../../scss/icons/arrow.svg';

const Button = props => {
  return (
    <button className="btn" disabled={props.disabled}>
      {props.children} <Arrow />
    </button>
  );
};

export default Button;
