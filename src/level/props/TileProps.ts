import type {useCreateStore} from "leva";

export type TileProps = {
    debug?: boolean,
    debugStore?: ReturnType<typeof useCreateStore>
}