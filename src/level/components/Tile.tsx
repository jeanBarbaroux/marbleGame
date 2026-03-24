import Cube from "../../shared/components/Cube.tsx";
import type {TileProps} from "../props/TileProps.ts";
import {Html} from "@react-three/drei";

function Tile({debug = false}: TileProps) {
    return <>
        <Cube scale={[4, 0.2, 4]} texture="limegreen"/>
        {debug && <Html>test</Html>}
    </>
}

export default Tile