import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { MemoChild } from "@/components/memo/react-memo/memo-child";
import { MemoChildWithObject } from "@/components/memo/react-memo/memo-child-with-object";

export const MemoParent = () => {
  const [count, setCount] = useState(0);

  const user = useMemo(() => {
    return { name: "John Doe", age: 30 };
  }, []);

  return (
    <div className="space-y-4 rounded-lg border border-border bg-background p-6 text-foreground">
      <h1>React Memo Example</h1>
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

      <div className="rounded-md border border-border bg-muted p-4">
        <MemoChild />
      </div>

      <div className="rounded-md border border-border bg-muted p-4">
        <MemoChildWithObject user={user} />
      </div>
    </div>
  );
};
