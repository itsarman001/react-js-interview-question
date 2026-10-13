import { CounterProvider } from "@/context/counterContext";
import { MainLayout } from "@/layouts/MainLayout";
function App() {
  return (
    <main>
      <CounterProvider>
        <MainLayout />
      </CounterProvider>
    </main>
  );
}

export default App;
