import "./App.css";
import Home from "./components/Home";
import AppProvider from "./auth/AppProvider";

function App() {
  return (
    <>
      <AppProvider>
        <Home />
      </AppProvider>
    </>
  );
}

export default App;
