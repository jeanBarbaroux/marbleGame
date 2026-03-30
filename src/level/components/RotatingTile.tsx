import Tile from "./Tile.tsx";
import Cube from "../../shared/components/Cube.tsx";
import {useControls} from "leva";
import {RigidBody} from "@react-three/rapier";
import {useRef, useState} from "react";
import {useFrame} from "@react-three/fiber";
import * as THREE from 'three';

function RotatingTile() {
    const rotatingBlock = useRef(null);
    const [speed] = useState(() => (Math.random() + 1) * (Math.random() < 0.5 ? 1 : -1))

    const debugObject = useControls("rotatingTile",{
        rotationY: {value: 0, min: -Math.PI, max: Math.PI},
        speed: speed
    })

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        const eulerRotation = new THREE.Euler(0, time * debugObject.speed, 0)
        const quaternionRotation = new THREE.Quaternion().setFromEuler(eulerRotation)
        rotatingBlock.current.setNextKinematicRotation(quaternionRotation)
    })

    return (
        <>
            <Tile/>
            <RigidBody type="kinematicPosition" ref={rotatingBlock}>
            <Cube
                position={[0, 0.5, 0]}
                name="rotatingTile"
                rotation={[0,debugObject.rotationY, 0]}
                scale={[0.5, 1, 3.968]}
                restitution={0.5}
                friction={0.5}
            />
            </RigidBody>
        </>
    );
}

export default RotatingTile;