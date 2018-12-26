import productReducer from './productReducer'
import {FETCH_PRODUCTS} from "../actions/types";

const initialState = {
    products:[],
    isFetching:true
};

const action = {
    type:FETCH_PRODUCTS,
    payload:[{title:'product1',price:2000}]
};

describe('products reducer',() => {

    it('should return initial state for undefined state',() => {
        expect(productReducer(undefined,action)).toEqual(initialState)
    })

    it('should return new state on action',() => {
        expect(productReducer(initialState,action)).toEqual({
            products:[{title:'product1',price:2000}],
            isFetching: false
        })
    })

});