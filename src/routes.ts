import type {RouteObject} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import DebugPage from "./pages/DebugPage.tsx";

const routes: RouteObject[] = [
    {path: "/", Component: HomePage},
    {path: "/debug/:object", Component: DebugPage},
    {path: "*", Component: PageNotFound}
]

export default routes;
