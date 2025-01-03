import { useState } from 'react';
import { addDays } from './utils';
import './app.css';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const realCount = count * step;

  // console.log(addDays(-5));
  return (
    <div className='app'>
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
      <div className='count'>
        <button type='button' onClick={() => setCount(count - 1)}>
          -
        </button>
        <span>Count: {realCount}</span>
        <button type='button' onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
      <div className='phrase capitalize'>
        {realCount > 0 ? (
          <span>{realCount} day(s) from today is </span>
        ) : realCount === 0 ? (
          <span>today is</span>
        ) : (
          <span>{realCount * -1} day(s) ago was</span>
        )}{' '}
        {addDays(realCount)}
      </div>
    </div>
  );
}

export default App;
