import { useState, useTransition } from "react";

const ITEMS = Array.from({ length: 20_000 }, (_, i) => `Item ${i}`);

export const UseTransitionDemo = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    startTransition(() => setFilter(value));
  };

  const matchingItems = ITEMS.filter((item) => item.includes(filter));
  const visible = matchingItems.slice(0, 100);

  return (
    <div className="space-y-3">
      <input
        aria-label="Filter items"
        className="w-full rounded-md border border-input bg-background px-3 py-2"
        value={query}
        onChange={handleChange}
      />
      {isPending && <p>Updating list...</p>}
      <p className="text-sm text-muted-foreground">
        {matchingItems.length.toLocaleString()} matching items
      </p>
      <ul
        className="max-h-48 overflow-auto"
        style={{ opacity: isPending ? 0.5 : 1 }}
      >
        {visible.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
