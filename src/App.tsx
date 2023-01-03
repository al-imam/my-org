import { Router, Outlet, Navigate } from "@tanstack/react-location";
import Profile from "./components/Profile/Profile";
import routes, { location } from "./routes/router";

function App() {
  return (
    <Router location={location} routes={routes}>
      <Navigate to="about" replace />
      <Profile />
      <Outlet />
    </Router>
  );
}

export default App;
