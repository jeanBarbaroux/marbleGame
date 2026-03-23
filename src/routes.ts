import {type RouteConfig, route, index} from "@react-router/dev/routes"

export default [
    index("./main.tsx"),
    route("/tile", "./level/components/Tile.tsx")
] satisfies RouteConfig