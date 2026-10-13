import { useState, useEffect, useLayoutEffect } from "react";

export const UseStateEffectComp = () => {
  // useState hook
  const [count, setCount] = useState<number>(0);
  const [showComponent, setShowComponent] = useState<boolean>(true);

  // useEffect hook
  useEffect(() => {
    console.log(`You clicked ${count} times`);

    return () => {
      console.log(`Cleanup: You clicked ${count} times`);
    };
  }, [count]);

  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  // useLayoutEffect hook
  useLayoutEffect(() => {
    console.log("useLayoutEffect: Component mounted");

    return () => {
      console.log("useLayoutEffect: Component unmounted");
    };
  }, []);

  return (
    <div>
      {showComponent && (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
      )}

      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? "Hide" : "Show"} Component
      </button>
    </div>
  );
};
