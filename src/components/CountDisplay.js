import React from 'react';

function CountDisplay({ count, setCount, realCount }) {
  return (
    <div className='count'>
      <button type='button' onClick={() => setCount(count - 1)}>
        -
      </button>
      <span>Count: {realCount}</span>
      <button type='button' onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}

export default CountDisplay;
