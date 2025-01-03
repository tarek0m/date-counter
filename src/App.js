import { useState } from 'react';
import StepCounter from './components/StepCounter';
import CountDisplay from './components/CountDisplay';
import DatePhrase from './components/DatePhrase';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const realCount = count * step;

  return (
    <div className='app'>
      <StepCounter step={step} setStep={setStep} />
      <CountDisplay count={count} setCount={setCount} realCount={realCount} />
      <DatePhrase realCount={realCount} />
    </div>
  );
}

export default App;
