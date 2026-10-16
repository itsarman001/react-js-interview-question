import { useRef, useState } from "react";
export const UseRefComp = () => {
  const [value, setValue] = useState<string>("");
  const myRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      input ref example:{" "}
      <input
        ref={myRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <div>{value}</div>
    </div>
  );
};
