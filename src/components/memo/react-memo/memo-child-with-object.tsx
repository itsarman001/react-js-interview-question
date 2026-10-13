import { memo, useRef } from "react";

export const MemoChildWithObject = memo(
  ({ user }: { user: { name: string; age: number } }) => {
    const renderCount = useRef(0);
    renderCount.current++;

    return (
      <div>
        <h1>Memo Child With Object Prop</h1>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>

        <p>Render count: {renderCount.current}</p>
      </div>
    );
  },
);
