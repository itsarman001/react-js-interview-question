import { memo, type ReactNode } from "react";

type Props = { onClick: () => void; children: ReactNode };

export const UseCallbackButton = memo(({ onClick, children }: Props) => {
  console.log(`Rendering UseCallbackButton: ${children}`);
  return (
    <button
      onClick={onClick}
      className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
    >
      {children}
    </button>
  );
});
