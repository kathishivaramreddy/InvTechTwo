import {FETCH_PRODUCTS, FETCH_REQUEST} from "../actions/types";

const initialState = {
    products :[],
    isFetching: true
};

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                isFetching:false
            }
        default:
            return state;
    }

}