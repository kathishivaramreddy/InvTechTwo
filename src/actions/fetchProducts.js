import {FETCH_REQUEST,FETCH_PRODUCTS} from "./types";

export const fetchProducts = () => disptach => {

    disptach({
        type:FETCH_REQUEST
    });

    return fetch('https://api.mercadolibre.com/sites/MLB/search?category=MLB1743&limit=20')
        .then( response => response.json())
        .then( products => {

            let {results} = products

            return disptach({
                type:FETCH_PRODUCTS,
                payload:results
            })
        })
};