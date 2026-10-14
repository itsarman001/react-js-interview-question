import { useState, useRef, useImperativeHandle, type Ref } from "react";

export type InputHandle = {
  focus: () => void;
  clear: () => void;
};

type Props = {
  ref: Ref<InputHandle>;
};

export const UseImperativeInput = ({ ref }: Props) => {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      focus: () => inputRef.current?.focus(),
      clear: () => setValue(""),
    }),
    [],
  );

  return (
    <input
      type="text"
      className="rounded-md border border-gray-300 px-3 py-2 mb-4 outline-none focus:border-blue-500"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      ref={inputRef}
    />
  );
};
