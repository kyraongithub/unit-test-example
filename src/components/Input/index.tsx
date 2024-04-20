import React from 'react';
import { Props } from './types.type';

const Input = (props: Props) => {
  const { label } = props;
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} />
    </div>
  );
};

export default Input;
