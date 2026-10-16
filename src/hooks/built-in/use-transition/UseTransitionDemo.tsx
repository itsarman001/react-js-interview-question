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

  const visible = ITEMS.filter((item) => item.includes(filter));

  return (
    <div className="space-y-3">
      <input value={query} onChange={handleChange} />
      {isPending && <p>Updating list...</p>}
      <ul style={{ opacity: isPending ? 0.5 : 1 }}>
        {visible.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
