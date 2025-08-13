import { useRoutes, Link } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";

export default function App() {
  const routes = useRoutes([
    { path: "/", element: <ShowCreators /> },
    { path: "/creators/new", element: <AddCreator /> },
    { path: "/creators/:id", element: <ViewCreator /> },
    { path: "/creators/:id/edit", element: <EditCreator /> },
  ]);

  return (
    <main className="container">
      <nav style={{ display: "flex", gap: 12, margin: "16px 0" }}>
        <Link to="/">Home</Link>
        <Link to="/creators/new">Add Creator</Link>
      </nav>
      {routes}
    </main>
  );
}
