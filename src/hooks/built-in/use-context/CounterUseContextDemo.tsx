import { useCounter } from "../context/counterContext.tsx";

export const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
