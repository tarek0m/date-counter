import React from 'react';

function StepCounter({ step, setStep }) {
  return (
    <div className='step'>
      <button
        type='button'
        onClick={() => {
          if (step > 1) {
            setStep(step - 1);
          }
        }}
      >
        -
      </button>
      <span>Step: {step}</span>
      <button type='button' onClick={() => setStep(step + 1)}>
        +
      </button>
    </div>
  );
}

export default StepCounter;
