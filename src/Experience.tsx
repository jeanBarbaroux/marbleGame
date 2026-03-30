import {OrbitControls} from "@react-three/drei";
import RotatingTile from "./level/components/RotatingTile.tsx";

function Experience() {
    return (
        <>
            <OrbitControls makeDefault/>
            <RotatingTile/>
        </>
    )
}

export default Experience
