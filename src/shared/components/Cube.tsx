import type {CubeProps} from "../props/CubeProps.tsx";

function Cube({position=[0, 0, 0], scale=[1, 1, 1], texture="red"}: CubeProps) {
    return <>
        <mesh position={position} scale={scale}>
            <boxGeometry args={[1, 1, 1]}/>
            <meshBasicMaterial color={texture}/>
        </mesh>
    </>
}

export default Cube