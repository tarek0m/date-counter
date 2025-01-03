export default function Reset({ step, setStep, count, setCount }) {
  const handleReset = () => {
    setStep(1);
    setCount(0);
  };

  return count !== 0 || step !== 1 ? (
    <button onClick={handleReset}>Reset</button>
  ) : null;
}
