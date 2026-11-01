import { WithoutUseActionSate } from "@/hooks/built-in/use-action-state/WithoutUseActionState";
import { WithUseActionState } from "@/hooks/built-in/use-action-state/WithUseActionState";

export const UseActionStateLayout = () => {
  return (
    <section className="space-y-5 border-t border-border pt-8">
      <header className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">03 / Forms</p>
        <h2 className="text-2xl font-semibold">Async form actions</h2>
        <p className="text-sm text-muted-foreground">
          Compare local submission state with React&apos;s useActionState.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-4 rounded-md border border-border p-5">
          <WithoutUseActionSate />
        </div>
        <div className="space-y-4 rounded-md border border-border p-5">
          <WithUseActionState />
        </div>
      </div>
    </section>
  );
};
