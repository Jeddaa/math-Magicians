/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Display from './Display';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [value, setValue] = useState({ total: '0', next: null, operation: null });

  function handleClick(e) {
    setValue((value) => ({
      ...value,
      ...calculate(value, e.target.name),
    }));
  }

  return (
    <div className="calculator-div">
      <h3 className="calculator-text">Let's do some math!</h3>
      <div className="calculator">
        <Display value={value} />
        <button type="button" onClick={handleClick} name="AC">
          AC
        </button>
        <button type="button" onClick={handleClick} name=" +/-">
          +/-
        </button>
        <button type="button" onClick={handleClick} name="%">
          %
        </button>
        <button type="button" className="orange" onClick={handleClick} name="÷">
          ÷
        </button>
        <button type="button" onClick={handleClick} name="7">
          7
        </button>
        <button type="button" onClick={handleClick} name="8">
          8
        </button>
        <button type="button" onClick={handleClick} name="9">
          9
        </button>
        <button type="button" className="orange" onClick={handleClick} name="x">
          x
        </button>
        <button type="button" onClick={handleClick} name="4">
          4
        </button>
        <button type="button" onClick={handleClick} name="5">
          5
        </button>
        <button type="button" onClick={handleClick} name="6">
          6
        </button>
        <button type="button" className="orange" onClick={handleClick} name="-">
          -
        </button>
        <button type="button" onClick={handleClick} name="1">
          1
        </button>
        <button type="button" onClick={handleClick} name="2">
          2
        </button>
        <button type="button" onClick={handleClick} name="3">
          3
        </button>
        <button type="button" className="orange" onClick={handleClick} name="+">
          +
        </button>
        <button type="button" className="span-two" onClick={handleClick} name="0">
          0
        </button>
        <button type="button" onClick={handleClick} name=".">
          .
        </button>
        <button type="button" className="orange" onClick={handleClick} name="=">
          =
        </button>
      </div>
    </div>
  );
}
