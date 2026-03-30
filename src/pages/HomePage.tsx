import {KeyboardControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import Experience from "../Experience.tsx";
import {Leva} from "leva";
import {Physics} from "@react-three/rapier";

function HomePage() {
    return (
        <>
            <Leva hidden={true}/>
            <KeyboardControls map={[]}>
                <Canvas shadows camera={{fov: 45, near: 0.1, far: 200, position: [2.5, 4, 6]}}>
                    <Physics>
                        <ambientLight intensity={0.5}/>
                        <directionalLight position={[5, 5, 5]} intensity={5}/>
                        <Experience/>
                    </Physics>
                </Canvas>
            </KeyboardControls>
        </>
    );
}

export default HomePage;

