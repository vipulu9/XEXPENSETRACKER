import Home from "./Pages/Home/Home";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider>
      <Home />
    </SnackbarProvider>
  );
}

export default App;