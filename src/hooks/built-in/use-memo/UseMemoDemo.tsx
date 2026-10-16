import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";

const ExpensiveComponent = () => {
  const sum = () => {
    console.log("Calculating sum...");
    let i = 0;
    for (i; i < 1000000000; i++) {
      i += 1;
    }
    console.log("Sum calculated:", i);
    return i;
  };

  //   const total = sum()
  const total = useMemo(() => sum(), []);
  return <div>Expensive Component: {total}</div>;
};

export const UseMemoComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-4 rounded-lg border border-border bg-background p-6 text-foreground">
      <h1>UseMemo Example</h1>

      <div className="mb-4 rounded-md border border-border bg-muted p-4">
        <ExpensiveComponent />
      </div>

      <p className="text-2xl font-semibold">Counter: {count}</p>

      <div className="flex gap-2">
        <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
        <Button variant="outline" onClick={() => setCount((c) => c - 1)}>
          Decrement
        </Button>
        <Button variant="destructive" onClick={() => setCount(0)}>
          Reset
        </Button>
      </div>
    </div>
  );
};
