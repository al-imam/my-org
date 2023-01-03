import { Router, Link, Outlet } from "@tanstack/react-location";
import routes, { location } from "./routes/router";

function App() {
  return (
    <Router location={location} routes={routes}>
      here will go my nav and profile
      <Outlet />
    </Router>
  );
}

export default App;
