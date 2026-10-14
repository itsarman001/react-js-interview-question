import { WithUseActionState } from "@/components/useActionState/with-use-action-state";
import { WithoutUseActionSate } from "@/components/useActionState/without-use-action-state";

export const UseActionStateLayout = () => {
  return (
    <div className="space-y-4">
      <WithUseActionState />
      <WithoutUseActionSate />
    </div>
  );
};
