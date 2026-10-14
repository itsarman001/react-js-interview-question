import { memo, useDeferredValue, useState } from "react";

const ITEMS = Array.from({ length: 20_000 }, (_, i) => `Item ${i}`);

const SlowList = memo(({ query }: { query: string }) => {
  const items = ITEMS.filter((i) => i.includes(query));
  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
});

export const UseDeferredValueDemo = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <div style={{ opacity: isStale ? 0.5 : 1 }}>
        <SlowList query={deferredQuery} />
      </div>
    </>
  );
};
