import { Header } from "@/components/Header";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { RouteLayout } from "@/layouts/RouteLayout";
import { Counter } from "@/feature/counter/Counter";

function App() {
  return (
    <ThemeProvider>
      <Header>
        <ModeToggle />
      </Header>

      <main className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-6">
        <RouteLayout />
        <Counter />
      </main>
    </ThemeProvider>
  );
}

export default App;
