import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import routes from "./routes.ts";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router}/>
);
