import { Outlet } from "react-router-dom";
import Menu from "./layouts/Menu";

function App() {
  return (
    <>
      <Menu />
      <main className="container mt-4">
        <Outlet />
      </main>
    </>
  );
}

export default App;
