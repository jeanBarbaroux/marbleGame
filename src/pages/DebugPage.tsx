import {KeyboardControls, OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {useParams} from "react-router-dom";
import Tile from "../level/components/Tile.tsx";
import Cube from "../shared/components/Cube.tsx";
import * as React from "react";
import {LevaPanel, useCreateStore} from "leva";

type DebugProps = {
    debug?: boolean,
    debugStore?: ReturnType<typeof useCreateStore>
}

const debugObjects: Record<string, React.ComponentType<DebugProps>> = {
    tile: Tile,
    cube: Cube,
};

function DebugViewport({DebugObject}: {DebugObject?: React.ComponentType<DebugProps>}) {
    const debugStore = useCreateStore();

    return (
        <>
            <LevaPanel store={debugStore}/>
            <KeyboardControls map={[]}>
                <Canvas shadows camera={{fov: 45, near: 0.1, far: 200, position: [2.5, 4, 6]}}>
                    <OrbitControls/>
                    {DebugObject ? <DebugObject debug debugStore={debugStore}/> : null}
                </Canvas>
            </KeyboardControls>
        </>
    );
}

function DebugPage() {
    const {object = ""} = useParams();
    const DebugObject = debugObjects[object.toLowerCase() as keyof typeof debugObjects];
    const activeDebugKey = object.toLowerCase() || "none";

    return <DebugViewport key={activeDebugKey} DebugObject={DebugObject}/>;
}

export default DebugPage;

