import { memo, useRef } from "react";

export const MemoChild = memo(() => {
  const renderCount = useRef(0);
  renderCount.current++;

  return (
    <div className="space-y-1 text-foreground">
      <p className="font-medium">MemoChild</p>
      <p className="text-sm text-muted-foreground">
        Render count: {renderCount.current}
      </p>
    </div>
  );
});
