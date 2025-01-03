import React from 'react';

function CountDisplay({ step, count, setCount }) {
  const handleChange = (e) => {
    const newValue = Number(e.target.value);
    setCount(newValue);
  };

  return (
    <div className='count'>
      <button type='button' onClick={() => setCount(count - step)}>
        -
      </button>
      <input type='text' value={count} onChange={handleChange} />
      <button type='button' onClick={() => setCount(count + step)}>
        +
      </button>
    </div>
  );
}

export default CountDisplay;
