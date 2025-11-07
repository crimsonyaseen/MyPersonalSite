import { Switch, Route, Router as WouterRouter } from "wouter";
import { ThemeProvider } from "./lib/theme-provider";
import { ThemeToggle } from "./components/ThemeToggle";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

const base = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, ''); // Remove trailing slash

function Router() {
  return (
    <WouterRouter base={base}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="*" component={Home} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
