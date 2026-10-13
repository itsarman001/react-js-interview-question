import { useState, useCallback } from "react";
import { UseCallbackButton as Button } from "@/components/memo/use-callback-button";

export const UseCallback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("Incrementing count inside useCallback");
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    console.log("Decrementing count inside useCallback");
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">useCallback</h1>
      <p className="text-sm">Count: {count}</p>
      <div className="flex gap-2">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
    </div>
  );
};
