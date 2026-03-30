import { Grid, KeyboardControls, OrbitControls } from "@react-three/drei";
    import { Canvas } from "@react-three/fiber";
    import { useParams } from "react-router-dom";
    import Tile from "../level/components/Tile.tsx";
    import Cube from "../shared/components/Cube.tsx";
    import * as React from "react";
    import { LevaPanel, useControls, useCreateStore } from "leva";
    import RotatingTile from "../level/components/RotatingTile.tsx";
    import { Physics } from "@react-three/rapier";
    import { Perf } from "r3f-perf";

    type DebugProps = {
        debug?: boolean;
        debugStore?: ReturnType<typeof useCreateStore>;
    };

    const debugObjects: Record<string, React.ComponentType<DebugProps>> = {
        tile: Tile,
        cube: Cube,
        rotating: RotatingTile,
    };

    function DebugPage() {
        const { object = "" } = useParams();
        const debugStore = useCreateStore();
        const debugObject = useControls({ showGridX: false, showGridY: false, showGridZ: false });
        const DebugObject = debugObjects[object.toLowerCase() as keyof typeof debugObjects];

        return (
            <>
                <LevaPanel store={debugStore} />
                <KeyboardControls map={[]}>
                    <Canvas shadows camera={{ fov: 45, near: 0.1, far: 200, position: [2.5, 4, 6] }}>
                        <Perf position="top-left" />

                        {debugObject.showGridY && <Grid infiniteGrid cellThickness={0.1} sectionSize={1} />}
                        {debugObject.showGridX && (<Grid infiniteGrid cellThickness={0.1} sectionSize={1} rotation-x={Math.PI * 0.5}/>)}
                        {debugObject.showGridZ && (<Grid infiniteGrid cellThickness={0.1} sectionSize={1} rotation-z={-Math.PI * 0.5}/>)}

                        <OrbitControls />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 5, 5]} intensity={5} />

                        <Physics debug>
                            {DebugObject ? <DebugObject debug debugStore={debugStore} /> : null}
                        </Physics>
                    </Canvas>
                </KeyboardControls>
            </>
        );
    }

    export default DebugPage;