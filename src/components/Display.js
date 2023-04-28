import React from 'react';

export default function Display(prop) {
  const { value } = prop;
  return (
    <div className="output">
      <p>
        {value.total}
        {value.operation}
        {value.next}
      </p>
    </div>
  );
}
