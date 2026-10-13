import { MemoParent } from "@/components/memo/react-memo/memo-parent";
import { UseMemoComponent } from "@/components/memo/use-memo";
import { UseCallback } from "@/components/memo/use-callback";

export const MemoLayout = () => {
  return (
    <div className="space-y-4 rounded-lg border border-border bg-background p-6 text-foreground">
      <h1>MemoLayout</h1>
      <MemoParent />
      <UseMemoComponent />
      <UseCallback />
    </div>
  );
};
