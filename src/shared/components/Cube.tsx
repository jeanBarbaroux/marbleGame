import type {CubeProps} from "../props/CubeProps.ts";
import {Html} from "@react-three/drei";

function Cube({position=[0, 0, 0], scale=[1, 1, 1], texture="red", debug=false}: CubeProps) {

    return <>
        <mesh position={position} scale={scale}>
            <boxGeometry args={[1, 1, 1]}/>
            <meshBasicMaterial color={texture}/>
        </mesh>
        {debug && <Html>Hey</Html>}
    </>
}

export default Cube