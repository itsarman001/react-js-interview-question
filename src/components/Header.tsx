import { Code2 } from "lucide-react";

export const Header = ({ children }: { children?: React.ReactNode }) => {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Code2 className="size-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-tight">
              React Interview Questions
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              Learn React by building
            </span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden text-sm text-muted-foreground sm:block">
            Appearance
          </span>
          {children}
        </div>
      </div>
    </header>
  );
};
