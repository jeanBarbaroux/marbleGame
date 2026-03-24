import {KeyboardControls, OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {useParams} from "react-router-dom";
import Tile from "../level/components/Tile.tsx";
import Cube from "../shared/components/Cube.tsx";
import * as React from "react";

type debugProps = { debug?: boolean}

const debugObjects: Record<string, React.ComponentType<debugProps>> = {
    tile: Tile,
    cube: Cube,
};

function DebugPage() {
    const {object = ""} = useParams();
    const DebugObject = debugObjects[object.toLowerCase() as keyof typeof debugObjects];

    return (
        <KeyboardControls map={[]}>
            <Canvas shadows camera={{fov: 45, near: 0.1, far: 200, position: [2.5, 4, 6]}}>
                <OrbitControls/>
                {DebugObject ? <DebugObject debug/> : null}
            </Canvas>
        </KeyboardControls>
    );
}

export default DebugPage;

