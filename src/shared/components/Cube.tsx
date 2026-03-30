import type {CubeProps} from "../props/CubeProps.ts";
import {useControls} from "leva";

function Cube({
                  position = [0, 0, 0],
                  scale = [1, 1, 1],
                  texture = "red",
                  name = "cube",
                  rotation = [0, 0, 0],
                  restitution = 0,
                  friction = 0
              }: CubeProps) {
    const debugObject = useControls(name, {
        cubeColor: texture,
        cubeScale: scale,
        cubePosition: position
    })

    return <>
        <mesh
            position={debugObject.cubePosition}
            scale={debugObject.cubeScale}
            rotation={rotation}
            receiveShadow
            castShadow
            restitution={restitution}
            friction={friction}
        >
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color={debugObject.cubeColor}/>
        </mesh>
    </>
}

export default Cube