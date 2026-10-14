import { Button } from "@/components/ui/button";
import {
  UseImperativeInput,
  type InputHandle,
} from "@/components/useImperativeHandle/use-imperative-input";
import { useRef } from "react";

export const UseImperativeParent = () => {
  const inputRef = useRef<InputHandle>(null);

  return (
    <div className="space-y-3">
      <div>UseImperativeHandle</div>

      <UseImperativeInput ref={inputRef} />

      <div className="space-x-2">
        <Button onClick={() => inputRef.current?.focus()}>Focus</Button>

        <Button onClick={() => inputRef.current?.clear()}>Clear</Button>
      </div>
    </div>
  );
};
