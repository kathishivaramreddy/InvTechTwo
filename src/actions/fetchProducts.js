import {FETCH_REQUEST} from "./types";

export const fetchProducts = () => disptach => {

    disptach({
        type:FETCH_REQUEST
    })

}