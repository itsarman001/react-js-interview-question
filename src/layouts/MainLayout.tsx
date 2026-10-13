// Components
import { UseStateEffectComp } from "@/components/use-state-effect";
import { UseRefComp } from "@/components/use-ref";
import { Counter } from "@/components/counter-use-context";
import { CounterWithUseReducer } from "@/components/counter-with-use-reducer";
import { UserFormWithReducer } from "@/components/user-form-with-reducer";

export const MainLayout = () => {
  return (
    <div>
      <UseStateEffectComp />
      <UseRefComp />
      <Counter />
      <CounterWithUseReducer />
      <UserFormWithReducer />
    </div>
  );
};
