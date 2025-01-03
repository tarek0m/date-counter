import React from 'react';

function StepCounter({ step, setStep }) {
  const handleChange = (e) => {
    const newValue = Number(e.target.value);
    setStep(newValue);
  };

  return (
    <div className='step'>
      <input
        type='range'
        min={1}
        max={10}
        value={step}
        onChange={handleChange}
      />
      <div></div>
      <span>{step}</span>
    </div>
  );
}

export default StepCounter;
