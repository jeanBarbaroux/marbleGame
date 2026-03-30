import type {useCreateStore} from "leva";

export type CubeProps = {
    position?: [number, number, number],
    scale?: [number, number, number],
    texture?: string,
    debug?: boolean,
    debugStore?: ReturnType<typeof useCreateStore>
}