import { useState } from 'react';
import StepCounter from './components/StepCounter';
import CountDisplay from './components/CountDisplay';
import DatePhrase from './components/DatePhrase';
import './App.css';
import Reset from './components/Reset';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div className='app'>
      <StepCounter step={step} setStep={setStep} />
      <CountDisplay step={step} count={count} setCount={setCount} />
      <DatePhrase count={count} />
      <Reset step={step} setStep={setStep} count={count} setCount={setCount} />
    </div>
  );
}

export default App;
