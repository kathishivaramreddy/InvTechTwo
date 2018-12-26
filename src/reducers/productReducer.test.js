import productReducer from './productReducer'

const initialState = {
    products:[],
    isFetching:true
};

const action = {

};

describe('products reducer',() => {

    it('should return initial state for undefined state',() => {
        expect(productReducer(undefined,action)).toEqual(initialState)
    })

});