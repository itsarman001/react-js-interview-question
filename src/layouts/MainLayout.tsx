import type { ReactNode } from "react";
import { Counter as ReduxCounter } from "@/feature/counter/Counter";
import { CounterWithUseReducer } from "@/hooks/built-in/use-reducer/CounterWithUseReducerDemo";
import { UserFormWithReducer } from "@/hooks/built-in/use-reducer/UserFormWithReducerDemo";
import { UseStateEffectComp } from "@/hooks/built-in/use-state-effect/UseStateEffectDemo";
import { UseRefComp } from "@/hooks/built-in/use-ref/UseRefDemo";
import { FormLayout as UseIdForm } from "@/hooks/built-in/use-id/UseIdForm";
import { CounterProvider } from "@/hooks/built-in/use-context/counter-context";
import { Counter as ContextCounter } from "@/hooks/built-in/use-context/CounterUseContextDemo";
import { UseImperativeParent } from "@/hooks/built-in/use-imperative-handle/UseImperativeParent";
import { UseDeferredValueDemo } from "@/hooks/built-in/use-deferred-value/UseDeferredValueDemo";
import { UseTransitionDemo } from "@/hooks/built-in/use-transition/UseTransitionDemo";

const Example = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="space-y-3 rounded-md border border-border p-5">
    <h2 className="text-lg font-semibold">{title}</h2>
    {children}
  </section>
);

export const MainLayout = () => {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">01 / Hooks</p>
        <h1 className="text-3xl font-semibold">React fundamentals</h1>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <Example title="State and effects">
          <UseStateEffectComp />
        </Example>
        <Example title="Refs">
          <UseRefComp />
        </Example>
        <Example title="useReducer: counter">
          <CounterWithUseReducer />
        </Example>
        <Example title="useReducer: form">
          <UserFormWithReducer />
        </Example>
        <Example title="Context">
          <CounterProvider>
            <ContextCounter />
          </CounterProvider>
        </Example>
        <Example title="useId">
          <UseIdForm />
        </Example>
        <Example title="Imperative handle">
          <UseImperativeParent />
        </Example>
        <Example title="Redux Toolkit">
          <ReduxCounter />
        </Example>
        <Example title="Deferred value">
          <UseDeferredValueDemo />
        </Example>
        <Example title="Transition">
          <UseTransitionDemo />
        </Example>
      </div>
    </div>
  );
};
