import {KeyboardControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import Experience from "../Experience.tsx";
import {Leva} from "leva";

function HomePage() {
    return (
        <>
            <Leva hidden={true} />
            <KeyboardControls map={[]}>
                <Canvas shadows camera={{fov: 45, near: 0.1, far: 200, position: [2.5, 4, 6]}}>
                    <Experience/>
                </Canvas>
            </KeyboardControls>
        </>
    );
}

export default HomePage;

