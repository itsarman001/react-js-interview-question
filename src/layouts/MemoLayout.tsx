import { UseCallback } from "@/hooks/built-in/use-callback/UseCallbackDemo";
import { UseMemoComponent } from "@/hooks/built-in/use-memo/UseMemoDemo";
import { MemoParent } from "@/performance/react-memo/MemoParent";

export const MemoLayout = () => {
  return (
    <section className="space-y-5 border-t border-border pt-8">
      <header className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">
          02 / Performance
        </p>
        <h2 className="text-2xl font-semibold">Memoization</h2>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        <MemoParent />
        <UseMemoComponent />
        <div className="rounded-md border border-border p-5">
          <UseCallback />
        </div>
      </div>
    </section>
  );
};
