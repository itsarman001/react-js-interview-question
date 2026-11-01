import { memo, useDeferredValue, useState } from "react";

const ITEMS = Array.from({ length: 20_000 }, (_, i) => `Item ${i}`);

const SlowList = memo(({ query }: { query: string }) => {
  const items = ITEMS.filter((i) => i.includes(query)).slice(0, 100);
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
  const matchingCount = ITEMS.filter((item) =>
    item.includes(deferredQuery),
  ).length;

  return (
    <div className="space-y-3">
      <input
        aria-label="Filter items"
        className="w-full rounded-md border border-input bg-background px-3 py-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className="text-sm text-muted-foreground">
        {matchingCount.toLocaleString()} matching items
      </p>
      <div
        className="max-h-48 overflow-auto"
        style={{ opacity: isStale ? 0.5 : 1 }}
      >
        <SlowList query={deferredQuery} />
      </div>
    </div>
  );
};
