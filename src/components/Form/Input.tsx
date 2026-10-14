import { useId } from "react";
import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input = ({ label, id, type = "text", ...props }: InputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div>
      {label && (
        <label className="mr-2" htmlFor={inputId}>
          {label}
        </label>
      )}

      <input id={inputId} type={type} {...props} />
    </div>
  );
};
