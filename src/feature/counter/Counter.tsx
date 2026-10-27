import { useState } from "react";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "@/feature/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export const Counter = () => {
  const [amount, setAmount] = useState(0);
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div className="mx-auto mt-12 max-w-sm rounded-xl border border-gray-200 p-6 shadow-sm">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Counter</h1>
        <p className="text-sm text-gray-500">Redux Toolkit</p>
      </header>

      <section className="mb-5 text-center" aria-label="Counter value">
        <output className="text-5xl font-bold tabular-nums">{count}</output>
      </section>

      <section
        className="mb-5 grid grid-cols-2 gap-3"
        aria-label="Counter controls"
      >
        <button
          type="button"
          onClick={() => dispatch(increment())}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Increment
        </button>

        <button
          type="button"
          onClick={() => dispatch(decrement())}
          className="rounded-lg bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300"
        >
          Decrement
        </button>
      </section>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(incrementByAmount(amount));
        }}
        className="space-y-3"
      >
        <label htmlFor="amount" className="block text-sm font-medium">
          Increment by amount
        </label>

        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Add {amount}
        </button>
      </form>
    </div>
  );
};
