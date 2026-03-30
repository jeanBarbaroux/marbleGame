import Cube from "../../shared/components/Cube.tsx";

function Tile() {
    return <>
        <Cube
            scale={[4, 0.2, 4]}
            texture="limegreen"
            name="tile"
            position={[0, -0.1, 0]}
        />
    </>
}

export default Tile