import { BrowserRouter } from "react-router-dom";
import AppRouter from "./pages/appRouter/AppRouter";
import Menu from "./components/menu/Menu";


function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
      <Menu />
    </BrowserRouter>
  );
}

export default App;


