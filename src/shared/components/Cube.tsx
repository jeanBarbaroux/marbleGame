import type {CubeProps} from "../props/CubeProps.ts";
import { useControls } from "leva";

function Cube({position=[0, 0, 0], scale=[1, 1, 1], texture="red"}: CubeProps) {
    const debugObject = useControls({
        cubeColor: texture,
        cubeScale: scale
    })

    return <>
        <mesh position={position} scale={debugObject.cubeScale}>
            <boxGeometry args={[1, 1, 1]}/>
            <meshBasicMaterial color={debugObject.cubeColor}/>
        </mesh>
    </>
}

export default Cube