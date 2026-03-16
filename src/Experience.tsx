import {OrbitControls} from "@react-three/drei";
import Tile from "./level/components/Tile.tsx";

function Experience() {
    return (
        <>
            <OrbitControls makeDefault/>
            <Tile/>
        </>
    )
}

export default Experience
